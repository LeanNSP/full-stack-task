'use strict';

const { Router } = require('express');

const authRouter = Router();

authRouter.post('/register');
authRouter.post('/login');
authRouter.get('/logout');

module.exports = authRouter;
