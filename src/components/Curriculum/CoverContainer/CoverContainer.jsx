import React from 'react';
import CoverPhoto from '../../../assets/perfilFinal.png';
import Loading from './Loading/Loading';

import './CoverContainer.scss';

const CoverContainer = () => {
  return (
    <div className='cover-container'>
      <img src={CoverPhoto} alt='Profile' />
      <div className='loading-container'>
        <Loading />
      </div>
    </div>
  );
};
export default CoverContainer;
