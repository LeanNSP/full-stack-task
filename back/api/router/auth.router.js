'use strict';

const { Router } = require('express');

const { register, login, logout, authorize } = require('../controllers/auth.controller');
const { validateCredentials, validateUniqueEmail } = require('../validators/auth.validator');

const authRouter = Router();

authRouter.post('/register', validateCredentials, validateUniqueEmail, register);
authRouter.post('/login', validateCredentials, login);
authRouter.get('/logout', authorize, logout);

module.exports = authRouter;
