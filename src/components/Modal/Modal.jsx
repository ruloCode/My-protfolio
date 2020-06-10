import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';
import ModalContaner from './ModalContainer/ModalContainer';

const Modal = (props) => {
  if (!props.isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className='modal'>
      <ModalContaner>
        {props.children}
      </ModalContaner>
    </div>, document.getElementById('portal'),
  );
};

export default Modal;

