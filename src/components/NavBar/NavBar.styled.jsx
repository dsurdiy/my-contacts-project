import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #92a9ca;
`;

export const Logo = styled(Link)`
  display: flex;
  padding: 15px;
  align-items: center;
  color: inherit;
  font-size: 25px;
  font-weight: 700;
  transition: color 250ms linear;

  svg {
    margin-left: 5px;
  }
`;

export const ContactsLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px 30px;
  color: inherit;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 8px;
  transition: all 300ms linear;

  &:hover {
    background-color: #92a9ca;
    color: #ffffff;
  }
`;
