import { StyledNavLink } from './AuthMenu.styled';

export const AuthMenu = () => {
  return (
    <div>
      <StyledNavLink to="/login">Login</StyledNavLink>
      <StyledNavLink to="/register">Register</StyledNavLink>
    </div>
  );
};
