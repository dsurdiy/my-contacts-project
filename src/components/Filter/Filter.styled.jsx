import styled from 'styled-components';

export const FilterInput = styled.input`
  display: block;
  width: 320px;
  height: 30px;
  margin: 40px auto 20px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  transition: all 300ms linear;

  :focus {
    outline: 1px solid #92a9ca;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
