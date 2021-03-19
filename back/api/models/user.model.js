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
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    throw error;
  }
});

// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
  try {
    return await bcrypt.compare(enteredPassword, this.password);
  } catch (error) {
    throw error;
  }
};

// Create user token
UserSchema.methods.createToken = async function () {
  try {
    const id = this._id;

    const token = jwt.sign({ id }, JWT_SECRET, {
      expiresIn: 2 * 24 * 60 * 60, // token lifetime: 2 days * 24 hours * 60 minutes * 60 seconds
    });

    await UserModel.findByIdAndUpdate(id, { token });

    return token;
  } catch (error) {
    throw error;
  }
};

// Clearing token
UserSchema.statics.clearingToken = async function (id) {
  try {
    return await this.findByIdAndUpdate(id, { token: null });
  } catch (error) {
    throw error;
  }
};

// Get id from token and get user by id
UserSchema.statics.getUserByIdFromToken = async function (token) {
  try {
    const id = await jwt.verify(token, JWT_SECRET).id;

    return await this.findById(id);
  } catch (error) {
    throw error;
  }
};

// users collection mongoDB
const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
