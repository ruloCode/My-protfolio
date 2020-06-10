/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef } from 'react';
import ContactInfo from '../../Curriculum/ContactInfo/ContactInfo';
import useOutsideClick from '../../../hooks/useOutsideClick/useOutsideClick';
import './ContactContainer.scss';

const ContactContainer = (props) => {
  const { cv: { email, phone, location } } = props;
  const [showContact, setShowContact] = useState(false);
  const ref = useRef(null);
  const outsideClickHandler = () => {
    setShowContact(false);
  };
  useOutsideClick(ref, outsideClickHandler);
  return (
    <div
      ref={ref}
      className={props.isOpen ? 'contact' : 'contact hidden'}

    >
      <label className='label' onClick={() => { setShowContact(!showContact); }}>
        Contact me
        <i className={showContact ? 'toggle fas fa-chevron-circle-down colapse' : 'toggle fas fa-chevron-circle-down '} />
      </label>
      <div className={showContact ? 'contact-container-toggle' : 'contact-container-toggle hidden'}>
        <ContactInfo label='Email' value={email} />
        <ContactInfo label='Phone' value={phone} />
        <ContactInfo label='Location' value={location} />
      </div>
    </div>

  );
};
export default ContactContainer;

