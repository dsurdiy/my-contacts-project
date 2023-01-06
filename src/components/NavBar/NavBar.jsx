import { TiContacts } from 'react-icons/ti';
import { MdContacts } from 'react-icons/md';
import { NavHeader, Logo, ContactsLink } from './NavBar.styled';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { UserMenu } from 'components/UserMenu/UserMenu';
import useAuth from 'hooks/useAuth';

export const NavBar = () => {
  const isLogin = useAuth();

  return (
    <NavHeader>
      <Logo to="/">
        Phonebook <TiContacts size={30} />
      </Logo>

      {isLogin ? (
        <>
          <ContactsLink to="/contacts">
            <MdContacts size={25} />
          </ContactsLink>
          <UserMenu />
        </>
      ) : (
        <AuthMenu />
      )}
    </NavHeader>
  );
};
