import React from 'react';
import ContactInfo from '../ContactInfo/ContactInfo';
import CoverContainer from '../CoverContainer/CoverContainer';
import './ProfileContainer.scss';

const ProfileContainer = (props) => {
  const { location, email, phone } = props;

  return (
    <div className='profile-container'>
      <CoverContainer className='cover-container' />

      <div className='profile-container__info'>
        <div className='contact-container'>
          <ContactInfo label='Phone' value={phone} />
          <ContactInfo label='Email' value={email} />
          <ContactInfo label='Location' value={location} />
        </div>

      </div>
    </div>
  );
};
export default ProfileContainer;

