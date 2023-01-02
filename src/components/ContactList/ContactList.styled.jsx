import styled from 'styled-components';

export const Contacts = styled.ul`
  font-size: 20px;
  font-weight: 500;
`;

export const ContactsItem = styled.li`
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;
