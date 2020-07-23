import React, { useState } from 'react';
import Loading from './Loading/Loading';
import Modal from '../../Modal/Modal';
import './CoverContainer.scss';
import Video from '../../Video/Video';

const CoverContainer = ({ cover }) => {

  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='cover-container'>
      <img onClick={handleClose} src={cover} alt='Profile' />
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
