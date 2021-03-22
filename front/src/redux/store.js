import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth/authReducer';

import errorHandler from '../middleware/erroeHandler';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [errorHandler],
});

export default store;
