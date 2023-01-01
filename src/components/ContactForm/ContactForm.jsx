import { useState } from 'react';
import PropTypes from 'prop-types';
import { IoMdContact } from 'react-icons/io';
import { BsFillPhoneFill } from 'react-icons/bs';
import { Form, Label, Input, AddContactBtn } from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    const newName = e.target.value;
    setName(newName);
  };

  const handleNumberChange = e => {
    const newNumber = e.target.value;
    setNumber(newNumber);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = { name, number };
    onSubmit(newContact);

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <IoMdContact size={20} /> Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
        />
      </Label>
      <Label>
        <BsFillPhoneFill size={18} /> Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNumberChange}
        />
      </Label>
      <AddContactBtn type="submit">Add contact</AddContactBtn>
    </Form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
