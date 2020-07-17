import React from 'react';
import CoverContainer from '../CoverContainer/CoverContainer';

import './NameContainer.scss';

const NameContainer = ({ cv }) => {
  const { name, ocupation } = cv;
  return (
    <div className='name-container'>
      <div className='cover-container'>
        <CoverContainer />
      </div>
      <div className='name'>
        <h2>{name}</h2>
        <p>{ocupation}</p>
      </div>
    </div>
  );
};
export default NameContainer;
