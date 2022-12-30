import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { GrContactInfo } from 'react-icons/gr';
import { BiPhone } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import { Modal } from 'components/Modal/Modal';
import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import { ContactWrapper, ContactInfo, DeleteBtn } from './Contact.styled';
import contactsOperations from 'redux/contacts/contacts-operations';
import contactsSelectors from 'redux/contacts/contacts-selectors';

export const Contact = ({ id, name, number }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(contactsSelectors.getIsLoading);

  const handleDeleteContact = id => {
    try {
      dispatch(contactsOperations.deleteContact(id));
      toast.info(`Contact ${name} deleted!`);
    } catch (error) {
      toast.error('Something went wrong :(');
    }
  };

  const handleOpenEditor = e => {
    e.preventDefault();
    setIsShowModal(true);
  };

  const handleCloseModal = () => setIsShowModal(false);

  return (
    <>
      <ContactWrapper>
        <ContactInfo onClick={handleOpenEditor}>
          <span>
            <GrContactInfo />
            {name}
          </span>
          <span>
            <BiPhone />
            {number}
          </span>
        </ContactInfo>

        <DeleteBtn
          type="button"
          disabled={isLoading}
          onClick={() => handleDeleteContact(id)}
        >
          <AiOutlineDelete size={20} />
        </DeleteBtn>
      </ContactWrapper>

      {isShowModal && (
        <Modal onClose={handleCloseModal}>
          <ContactEditor
            id={id}
            name={name}
            number={number}
            onClose={handleCloseModal}
          />
        </Modal>
      )}
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
