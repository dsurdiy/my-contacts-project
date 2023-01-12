import styled from 'styled-components';

export const Form = styled.form`
  max-width: 500px;
  margin: 70px auto 0;
  padding: 30px;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const IconWrapper = styled.div`
  margin-bottom: 20px;
  text-align: center;
  color: #2e2e2e;

  span {
    display: block;
    font-weight: 700;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 15px;
  font-size: 18px;
  color: inherit;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  margin-top: 10px;
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

export const SubmitBtn = styled.button`
  width: 100%;
  margin-top: 15px;
  padding: 10px;
  color: #ffffff;
  font-size: 18px;
  border: none;
  background-color: #2e2e2e;
  border-radius: 10px;
  cursor: pointer;
  transition: all 300ms linear;

  &:hover,
  :focus {
    color: #92a9ca;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
