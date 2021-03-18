'use strict';

const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  token: { type: String },
});

// users collection mongoDB
const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
