import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginForm } from 'components/LoginForm/LoginForm';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';

const LoginPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getAuthError);

  const onLogin = credentials => {
    dispatch(authOperations.login(credentials));
  };

  if (error) {
    toast.error('Login error! Change email or password and try again.');
  }

  return (
    <main>
      <LoginForm onSubmit={onLogin} />
    </main>
  );
};

export default LoginPage;
