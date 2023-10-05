import React from 'react';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const handleDelete = async contactId => {
    try {
      dispatch(deleteContact(contactId));
    } catch (error) {
      alert(`Error adding contact: ${error.message}`);
    }
  };

  const dispatch = useDispatch();

  const getVisibleContact = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContact();
  return (
    <ul>
      {visibleContacts.map(({ name, number, id }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={() => handleDelete(id)}>
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
