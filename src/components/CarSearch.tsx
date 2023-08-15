import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from '../store';
import React from 'react';

function CarSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(({ cars: { searchTerm } }) => {
    return searchTerm;
  });

  const handleTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchTerm(event?.target.value));
  };

  return (
    <div>
      <div className='list-header'>
        <h3 className='title is-3'>My Cars</h3>
        <div className='search field is-horizontal'>
          <label className='label'>Search</label>
          <input
            className='input'
            placeholder='Search term...'
            value={searchTerm}
            onChange={handleTermChange}
          />
        </div>
      </div>
    </div>
  );
}

export default CarSearch;
