import { createAction } from '@reduxjs/toolkit';

const authActions = {
  registerRequest: createAction('auth/registerRequest'),
  registerSuccess: createAction('auth/registerSuccess'),
  registerError: createAction('auth/registerError'),

  loginRequest: createAction('auth/loginRequest'),
  loginSuccess: createAction('auth/loginSuccess'),
  loginError: createAction('auth/loginError'),

  logoutRequest: createAction('auth/logoutRequest'),
  logoutSuccess: createAction('auth/logoutSuccess'),
  logoutError: createAction('auth/logoutError'),
};

export default authActions;
