'use strict';

const { Router } = require('express');

const { register, login, logout } = require('../controllers/auth.controller');
const { validateCredentials, validateUniqueEmail } = require('../validators/auth.validator');

const authRouter = Router();

authRouter.post('/register', validateCredentials, validateUniqueEmail, register);
authRouter.post('/login', validateCredentials, login);
authRouter.get('/logout', logout);

module.exports = authRouter;
