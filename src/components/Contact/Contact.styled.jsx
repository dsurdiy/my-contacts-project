import styled from 'styled-components';

export const ContactWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const ContactInfo = styled.a`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px;
  color: inherit;
  background-color: #fff;
  border-radius: 10px;
  cursor: pointer;
  transform: scale(1);
  transition: transform 300ms linear;

  &:hover {
    transform: scale(1.02);
  }

  span {
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const DeleteBtn = styled.button`
  border-radius: 10px;
  border: none;
  background-color: #e55d5d;
  cursor: pointer;
  transition: all 250ms linear;

  :hover,
  :focus {
    background-color: #a33c2a;
    color: #ffffff;
  }
`;
