import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../../organisms/Modal/Modal';
import PortalProvider from '../PortalProvider/PortalProvider';
import { setModalDialog } from '../../../redux/modalDialog/modalDialog.actions';
import useOutsideClick from '../../../hooks/useOutsideClick/useOutsideClick';

import './ModalProvider.scss';

const ModalProvider = (props) => {
  const [showModal, setShowModal] = useState(true);

  const { children, customModal, showCustomModal } = props;
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { type, message, mainFn } = useSelector((state) => state.modalDialog.modal);

  const closeDialog = () => {
    dispatch(setModalDialog({ modal: { type: '', message: '', mainFn: () => null } }));
  };



  return (
    <>
      {children}
      {showModal
        && (
          <PortalProvider>
            {() => {
              useOutsideClick(ref, closeDialog);
              return (
                <dialog className='modal-dialog' open={Boolean(type)} ref={ref}>
                  hola
                </dialog>
              );
            }}
          </PortalProvider>
        )}
    </>
  );
};

export default ModalProvider;
