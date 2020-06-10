import React, { useState } from 'react';
import './Curriculum.scss';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import NameContainer from './NameContainer/NameContainer';
import ProfileContainer from './ProfileContainer/ProfileContainer';
import ProfessionalProfile from './ProfessionalProfile/ProfessionalProfile';
import cv from '../../cv';

const Curriculum = () => {
  
  const { name, ocupation, lenguajes, profesionalProfile, experience, education, phone, email, location } = cv;
  return (
    <div className='curriculumn'>
      <NameContainer />
      <ProfileContainer phone={phone} email={email} location={location} />
      <div className='curriculumn__cv-container'>
        <ProfessionalProfile profesionalProfile={profesionalProfile} />
        <Experience experience={experience} />
        <Education education={education} />
      </div>
    </div>

  );
};

export default Curriculum;
