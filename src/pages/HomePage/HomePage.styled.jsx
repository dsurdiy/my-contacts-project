import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto 0;
  gap: 20px;
  border-radius: 10px;
`;

export const Hero = styled.h1`
  font-size: 44px;
`;

export const Label = styled.h2`
  color: #92a9ca;
  font-size: 30px;
`;

export const StyledLink = styled(Link)`
  padding: 15px 30px;
  color: inherit;
  font-size: 18px;
  font-weight: 500;
  border: 1px solid #2e2e2e;
  border-radius: 8px;
  transition: all 300ms linear;

  &:hover,
  :focus {
    background-color: #2e2e2e;
    color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
