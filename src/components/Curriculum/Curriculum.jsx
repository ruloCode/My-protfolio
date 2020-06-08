import React from 'react';
import ProfilePhoto from '../../assets/perfilFinal.png';
import PortfolioIcon from '../../assets/work.png';
import './Curriculum.scss';
import Experience from './Experience/Experience';
import cv from '../../cv';

const Curriculum = () => {
  const { name, ocupation, profesionalProfile, experience, phone, email, location } = cv;
  return (
    <div className='curriculumn'>
      <div className='curriculumn_name-container'>
        <h2>{name}</h2>
        <p>{ocupation}</p>
      </div>
      <div className='curriculumn__profile-container'>
        <div className='cover-container'>
          <img src={ProfilePhoto} alt='Profile' />
        </div>
        <div className='container__info'>
          <div className='contact-container'>
            <div className='info__contact phone'>
              <i className='fas fa-phone-alt' />
              phone
            </div>
            <div className='info__contact email'>
              <i className='fas fa-envelope' />
              email
            </div>
            <div className='info__contact location'>
              <i className='fas fa-street-view' />
              location
            </div>
          </div>
        </div>
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
