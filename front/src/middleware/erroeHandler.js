const errorType = ['auth/registerError', 'auth/loginError', 'auth/logoutError'];

const errorHandler = store => next => async action => {
  const { payload } = await action;
  if (!payload) {
    return next(action);
  }

  // development mode
  //   console.log(action);

  const isError = errorType.find(type => type === action.type);

  if (isError) {
    alert(payload);
    return;
  }

  return next(action);
};

export default errorHandler;
