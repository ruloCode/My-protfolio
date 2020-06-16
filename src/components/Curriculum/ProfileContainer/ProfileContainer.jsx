import React from 'react';
import { useSelector } from 'react-redux';
import ContactInfo from '../ContactInfo/ContactInfo';
import CoverContainer from '../CoverContainer/CoverContainer';
import './ProfileContainer.scss';

const ProfileContainer = () => {
  const cv = useSelector((state) => state.user.cv);

  const { location, email, phone, softwareskills } = cv;

  return (
    <div className='profile-container'>
      <CoverContainer className='cover-container' />

      <div className='profile-container__info'>
        <div className='contact-container'>
          <ContactInfo label='Phone' value={phone} />
          <ContactInfo label='Email' value={email} />
          <ContactInfo label='Location' value={location} />
        </div>
        <div className='lenguajes'>
          <h3>Languajes</h3>
          <dd>English</dd>
          <dd>Spanish</dd>
        </div>
        <div className='software-skills'>
          <h3>Software Skills</h3>
          <div className='skills-container'>
            {softwareskills.map((skill) => {
              return (
                <div className='skill-container'>
                  <img src={skill.logo} alt='logo' />
                  <dd>{skill.name}</dd>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
export default ProfileContainer;

