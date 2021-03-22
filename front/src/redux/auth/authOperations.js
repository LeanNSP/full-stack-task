import { authActions } from '.';

import fetchServer, { tokenToHeader } from '../../services/fetchServer';

const authOperations = {
  register: async (credentials, dispatch) => {
    dispatch(authActions.registerRequest());

    try {
      const data = await fetchServer.post('/auth/register', credentials);

      dispatch(authActions.registerSuccess(data));

      return data;
    } catch (error) {
      dispatch(authActions.registerError(error));
    }
  },

  login: async (credentials, dispatch) => {
    dispatch(authActions.loginRequest());

    try {
      const data = await fetchServer.post('/auth/login', credentials);

      tokenToHeader.set(data.token);

      dispatch(authActions.loginSuccess(data));
    } catch (error) {
      dispatch(authActions.loginError(error));
    }
  },

  logout: async dispatch => {
    dispatch(authActions.logoutRequest());

    try {
      await fetchServer.get('/auth/logout');

      tokenToHeader.unset();

      dispatch(authActions.logoutSuccess());
    } catch (error) {
      dispatch(authActions.logoutError(error));
    }
  },
};

export default authOperations;
