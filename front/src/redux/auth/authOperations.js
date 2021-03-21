import { authActions } from '.';

import fetchServer from '../../services/fetchServer';

const authOperations = {
  register: async (credentials, dispatch) => {
    dispatch(authActions.registerRequest());

    try {
      //TODO: fetch
      dispatch(authActions.registerSuccess());
    } catch (error) {
      dispatch(authActions.registerError());
    }
  },

  login: async (credentials, dispatch) => {
    dispatch(authActions.loginRequest());

    try {
      const data = await fetchServer.post('/auth/login', credentials);

      dispatch(authActions.loginSuccess(data));
    } catch (error) {
      dispatch(authActions.loginError());
    }
  },

  logout: async dispatch => {
    dispatch(authActions.logoutRequest());

    try {
      //TODO: fetch
      dispatch(authActions.logoutSuccess());
    } catch (error) {
      dispatch(authActions.logoutError());
    }
  },
};

export default authOperations;
