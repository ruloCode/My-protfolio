import React from 'react';

import './ProfessionalProfile.scss';

const ProfessionalProfile = (props) => {
  const { profesionalProfile } = props;

  return (
    <div className='professional-profile'>
      <div className='professional-profile__header'>
        <h3>Professional Profile</h3>
        <div className='line'>
          <div className='line-box1' />
          <div />
        </div>
      </div>
      <p>
        {profesionalProfile}
      </p>
    </div>
  );
};
export default ProfessionalProfile;

