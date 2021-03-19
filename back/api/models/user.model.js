'use strict';

const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config/env.keys');

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  token: { type: String },
});

// Encrypt password using bcryptjs
UserSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Create user token
UserSchema.methods.createToken = async function () {
  const id = this._id;

  const token = jwt.sign({ id }, JWT_SECRET, {
    expiresIn: 2 * 24 * 60 * 60, // token lifetime: 2 days * 24 hours * 60 minutes * 60 seconds
  });

  await UserModel.findByIdAndUpdate(id, { token });

  return token;
};

// users collection mongoDB
const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
