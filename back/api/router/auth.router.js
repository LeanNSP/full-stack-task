'use strict';

const { Router } = require('express');

const { register } = require('../controllers/auth.controller');

const authRouter = Router();

authRouter.post('/register', register);
authRouter.post('/login');
authRouter.get('/logout');

module.exports = authRouter;
