import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from 'redux/contacts/contacts-operations';
import contactsSelectors from 'redux/contacts/contacts-selectors';
import { changeFilter } from 'redux/filterSlice';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Wrapper, PageTitle, ContactsContainer } from './ContactsPage.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  const formSubmitHandler = newContact => {
    const normalizedNewContactsName = newContact.name.toLowerCase();
    const existingСontact = contacts.find(
      ({ name }) => name.toLowerCase() === normalizedNewContactsName
    );

    if (existingСontact) {
      return toast.warn(`${newContact.name} is already in contacts`);
    }

    try {
      dispatch(contactsOperations.addContact(newContact));
      toast.success(`${newContact.name} successfully added :)`);
    } catch (error) {
      toast.error('Something went wrong :(');
    }
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleFilterChange = e => {
    const newFilter = e.target.value;
    dispatch(changeFilter(newFilter));
  };

  const isContacts = getFilteredContacts().length !== 0;

  return (
    <>
      <PageTitle>My Contacts</PageTitle>
      <Wrapper>
        <ContactForm onSubmit={formSubmitHandler} />

        <ContactsContainer>
          <Filter value={filter} onChange={handleFilterChange} />
          <ContactList contacts={getFilteredContacts()} />
          {!isContacts && <b>There are no contacts...</b>}
        </ContactsContainer>
      </Wrapper>
    </>
  );
};

export default ContactsPage;
