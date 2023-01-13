import { useSelector, useDispatch } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import { Wrapper, UserEmail, LogoutBtn } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getEmail);

  const onLogout = () => dispatch(authOperations.logout());

  return (
    <Wrapper>
      <UserEmail>
        <FaUserCircle size={25} />
        {email}
      </UserEmail>
      <LogoutBtn type="button" onClick={onLogout}>
        <FiLogOut size={25} />
      </LogoutBtn>
    </Wrapper>
  );
};
