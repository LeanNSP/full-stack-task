'use strict';

const { Router } = require('express');

const { register, login, logout } = require('../controllers/auth.controller');

const authRouter = Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.get('/logout', logout);

module.exports = authRouter;
