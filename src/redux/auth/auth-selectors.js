const getIsLogin = state => state.auth.isLogin;
const getEmail = state => state.auth.user.email;
const getAuthError = state => state.auth.error;
const getIsGettingCurrentUser = state => state.auth.isGettingCurrentUser;

const authSelectors = {
  getIsLogin,
  getEmail,
  getAuthError,
  getIsGettingCurrentUser,
};

export default authSelectors;
