import { createReducer } from '@reduxjs/toolkit';

import authActions from './authActions';

const INITIAL_USER_STATE = { id: null, email: null, token: null };

const authReducer = createReducer(INITIAL_USER_STATE, {
  [authActions.registerSuccess]: (_, { payload }) => payload,
  [authActions.loginSuccess]: (_, { payload }) => payload,
});

export default authReducer;
