import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getAuthError);

  const onRegister = credentials => {
    dispatch(authOperations.register(credentials));
  };

  if (error) {
    toast.error('Auth error! Please, change credentials and try again.');
  }

  return (
    <main>
      <RegisterForm onSubmit={onRegister} />
    </main>
  );
};

export default RegisterPage;
