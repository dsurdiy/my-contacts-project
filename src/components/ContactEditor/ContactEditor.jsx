import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import {
  EditorHeading,
  CloseBtn,
  Label,
  Input,
  UpdateContactBtn,
} from './ContactEditor.styled';
import contactsOperations from 'redux/contacts/contacts-operations';

export const ContactEditor = ({ id, name, number, onClose }) => {
  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const updatedContact = {
      id,
      name: data.get('name'),
      number: data.get('number'),
    };

    dispatch(contactsOperations.updateContact(updatedContact));
    onClose();
  };

  return (
    <>
      <EditorHeading>
        <span>Update contact</span>
        <CloseBtn type="button" onClick={() => onClose()}>
          <MdClose size={30} />
        </CloseBtn>
      </EditorHeading>
      <form onSubmit={handleFormSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder={name}
          />
        </Label>
        <Label>
          Nubmer
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder={number}
          />
        </Label>
        <UpdateContactBtn type="submit">Save changes</UpdateContactBtn>
      </form>
    </>
  );
};

ContactEditor.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
