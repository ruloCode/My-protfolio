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
          <ContactInfo label='phone' value={phone} />
          <ContactInfo label='email' value={email} />
          <ContactInfo label='location' value={location} />
        </div>

      </div>
    </div>
  );
};
export default ProfileContainer;

