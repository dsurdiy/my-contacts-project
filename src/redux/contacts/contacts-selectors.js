const getContacts = state => state.contacts.items;
const getIsLoading = state => state.contacts.loading;

const contactsSelectors = {
  getContacts,
  getIsLoading,
};

export default contactsSelectors;
