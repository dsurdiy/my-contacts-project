import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';
import { Contacts, ContactsItem } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <Contact id={id} name={name} number={number} />
        </ContactsItem>
      ))}
    </Contacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
