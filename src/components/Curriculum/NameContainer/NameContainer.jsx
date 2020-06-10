import React from 'react';
import CoverContainer from '../CoverContainer/CoverContainer';
import cv from '../../../cv';

import './NameContainer.scss';

const NameContainer = () => {
  return (
    <div className='name-container'>
      <div className='cover-container'>
        <CoverContainer />
      </div>
      <div className='name'>
        <h2>{cv.name}</h2>
        <p>{cv.ocupation}</p>
      </div>
    </div>
  );
};
export default NameContainer;
