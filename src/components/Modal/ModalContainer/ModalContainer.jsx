import React, { useRef } from 'react';
import useOutsideClick from '../../../hooks/useOutsideClick/useOutsideClick';
import './ModalContainer.scss';

const ModalContainer = (props) => {
  const ref = useRef(null);
  useOutsideClick(ref, props.onClose);
  return (
    <div ref={ref} className='modal__container'>
      {props.children}
    </div>
  );
};

export default ModalContainer;

