const authSelectors = {
  isAuthenticated: state => state.auth.token,

  getUserName: state => state.auth.email,
};

export default authSelectors;
