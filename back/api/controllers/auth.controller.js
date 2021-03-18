'use strict';

const UserModel = require('../models/user.model');

exports.register = async (req, res, next) => {
  const { email, password } = req.body;

  // Create user
  const user = await UserModel.create({ email, password });

  return await res.status(201).json({ id: user._id, email: user.email, token: user.token });
};
