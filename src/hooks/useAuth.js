import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

const useAuth = () => {
  const isLogin = useSelector(authSelectors.getIsLogin);
  return isLogin;
};

export default useAuth;
