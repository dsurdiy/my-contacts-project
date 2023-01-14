import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const UserEmail = styled.span`
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  margin-right: 15px;

  svg {
    margin-right: 8px;
  }
`;

export const LogoutBtn = styled.button`
  cursor: pointer;
  padding: 5px 15px;
  background-color: transparent;
  border-radius: 8px;
  border: none;
  color: #ea3d3d;
  transition: all 300ms linear;

  &:hover,
  :focus {
    background-color: #ea3d3d;
    color: #ffffff;
  }
`;
