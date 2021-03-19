'use strict';

const UserModel = require('../models/user.model');

// TODO: validateCredentialsReg & validateUniqueEmail
exports.register = async (req, res, next) => {
  try {
    // Create user
    const user = await UserModel.create(req.body);

    const { _id, email } = user;

    return await res.status(201).json({ id: _id, email });
  } catch (error) {
    next(error);
  }
};

// TODO: validateCredentialsLog
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Check for User
    const user = await UserModel.findOne({ email });

    // Check is password matches
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      throw new Error();
    }

    // Create token
    const token = await user.createToken();

    return await res.status(200).json({ id: user._id, email, token });
  } catch (error) {
    next(error);
  }
};
