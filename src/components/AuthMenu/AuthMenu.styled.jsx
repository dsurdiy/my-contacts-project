import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  padding: 8px 15px;
  color: #92a9ca;
  font-size: 18px;
  font-weight: 500;
  border: 1px solid #2e2e2e;
  border-radius: 8px;
  transition: all 300ms linear;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &.active,
  &:hover,
  :focus {
    color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: #2e2e2e;
  }
`;
