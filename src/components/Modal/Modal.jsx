import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';
import ModalContainer from './ModalContainer/ModalContainer';

const Modal = (props) => {
  if (!props.isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className='modal'>
      <ModalContainer onClose={props.onClose}>
        {props.children}
      </ModalContainer>
    </div>, document.getElementById('portal'),
  );
};

export default Modal;

