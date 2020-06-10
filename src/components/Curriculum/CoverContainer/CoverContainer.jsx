import React, { useState, useRef } from 'react';
import CoverPhoto from '../../../assets/perfilFinal.png';
import Loading from './Loading/Loading';
import Modal from '../../Modal/Modal';
import './CoverContainer.scss';
import Video from '../../Video/Video';

const CoverContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    console.log('camio ellllllllllllllllllllllllllllllll estado');
    setIsOpen(!isOpen);
  };
  return (
    <div className='cover-container'>
      <img onClick={handleClose} src={CoverPhoto} alt='Profile' />
      <div className='loading-container'>
        <Loading />
      </div>
      <Modal onClose={handleClose} isOpen={isOpen}>
        <Video onClose={handleClose} />
      </Modal>
    </div>
  );
};
export default CoverContainer;
