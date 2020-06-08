import React from 'react';
import ProfilePhoto from '../../assets/perfilFinal.png';
import PortfolioIcon from '../../assets/work.png';
import './Curriculum.scss';
import Experience from './Experience/Experience';
import cv from '../../cv';

const Curriculum = () => {
  const { name, ocupation, profesionalProfile, experience } = cv;
  return (
    <div className='curriculumn'>
      <div className='curriculumn_name-container'>
        <h2>{name}</h2>
        <p>{ocupation}</p>
      </div>
      <div className='curriculumn__profile-container'>
        <img className='' src={ProfilePhoto} alt='Profile' />

      </div>
      <div className='curriculumn__cv-container'>
        <div className='cv-container__professional-profile'>
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
        <Experience experience={experience} />
      </div>
    </div>
  );
};

export default Curriculum;
