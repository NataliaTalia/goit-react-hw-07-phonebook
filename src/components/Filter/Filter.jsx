import React from 'react';
import { setFilter } from '../../redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';

import { selectFilter } from '../../redux/selectors';

const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const filterHandler = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <label>
      Find contacts by name:
      <input type="text" value={filter} onChange={filterHandler} />
    </label>
  );
};

export default Filter;
