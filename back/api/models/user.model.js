'use strict';

const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const bcrypt = require('bcryptjs');

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

// users collection mongoDB
const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
