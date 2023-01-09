import { Navigate, Outlet } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

export const PublicRoute = () => {
  const isLogin = useAuth();

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return <Outlet />;
};
