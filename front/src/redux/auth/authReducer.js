import { createReducer } from '@reduxjs/toolkit';

const INITIAL_USER_STATE = { email: null, token: null };

const authReducer = createReducer(INITIAL_USER_STATE, {});

export default authReducer;
