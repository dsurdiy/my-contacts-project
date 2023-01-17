import { useSelector } from 'react-redux';
import { MdOutlineContacts } from 'react-icons/md';
import authSelectors from 'redux/auth/auth-selectors';
import { Container, Hero, Label, StyledLink } from './HomePage.styled';

const HomePage = () => {
  const isLogin = useSelector(authSelectors.getIsLogin);

  return (
    <Container>
      <MdOutlineContacts size={100} />
      <Hero>Welcome to Phonebook App</Hero>
      <Label>Keep all your contacts in one place</Label>

      {isLogin ? (
        <StyledLink to="/contacts">My Contacts</StyledLink>
      ) : (
        <StyledLink to="/register">Get Started</StyledLink>
      )}
    </Container>
  );
};

export default HomePage;
