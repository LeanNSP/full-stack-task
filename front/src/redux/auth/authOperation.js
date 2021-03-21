import { authActions } from './';

export const register = async (credentials, dispatch) => {
  dispatch(authActions.registerRequest());

  try {
    //TODO: fetch
    dispatch(authActions.registerSuccess());
  } catch (error) {
    dispatch(authActions.registerError());
  }
};

export const logIn = async (credentials, dispatch) => {
  dispatch(authActions.loginRequest());

  try {
    //TODO: fetch
    dispatch(authActions.loginSuccess());
  } catch (error) {
    dispatch(authActions.loginError());
  }
};

export const logOut = async dispatch => {
  dispatch(authActions.logoutRequest());

  try {
    //TODO: fetch
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError());
  }
};
