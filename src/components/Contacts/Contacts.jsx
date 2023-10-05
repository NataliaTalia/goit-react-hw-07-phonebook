import React from 'react';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';

const Contacts = () => {
  const handleDelete = async contactId => {
    try {
      dispatch(deleteContact(contactId));
    } catch (error) {
      alert(`Error adding contact: ${error.message}`);
    }
  };

  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <ul>
      {visibleContacts.map(({ name, phone, id }) => (
        <li key={id}>
          {name}: {phone}
          <button type="button" onClick={() => handleDelete(id)}>
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
