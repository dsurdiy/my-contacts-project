import styled from 'styled-components';

export const EditorHeading = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #92a9ca;

  span {
    font-size: 24px;
    font-weight: 700;
  }
`;

export const CloseBtn = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: transparent;
  color: inherit;
  border: none;
  padding: 6px;
  border-radius: 50%;
  transition: all 300ms linear;

  &:hover,
  :focus {
    background-color: #ea3d3d;
    color: #ffffff;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 15px;
  font-size: 18px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #92a9ca;
  border-radius: 10px;
  font-size: 18px;
  transition: all 300ms linear;

  :focus {
    outline: 1px solid #92a9ca;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const UpdateContactBtn = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  color: #ffffff;
  font-size: 18px;
  border: none;
  background-color: #2e2e2e;
  border-radius: 10px;
  cursor: pointer;
  transition: all 300ms linear;

  &:hover {
    color: #92a9ca;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
