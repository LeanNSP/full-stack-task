'use strict';

const Joi = require('joi');

const UserModel = require('../models/user.model');

const ErrorResponse = require('../utils/errorResponse');

exports.validateCredentials = (req, res, next) => {
  try {
    const credentialsRules = Joi.object({
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'pw', 'ua'] } })
        .required(),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,20}$')).required(),
    });

    const valid = credentialsRules.validate(req.body);

    if (valid.error) {
      throw new ErrorResponse('Invalid name or message', 401);
    }

    next();
  } catch (error) {
    next(error);
  }
};

exports.validateUniqueEmail = async (req, res, next) => {
  const { email } = req.body;

  try {
    // Check for User
    const user = await UserModel.findOne({ email });

    if (user) {
      throw new ErrorResponse('Email in use', 409);
    }

    next();
  } catch (error) {
    next(error);
  }
};
