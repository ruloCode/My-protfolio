import React from 'react';
import ProfilePhoto from '../../assets/perfilFinal.png';
import './Curriculum.scss';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import cv from '../../cv';

const Curriculum = () => {
  const { name, ocupation, lenguajes, profesionalProfile, experience, education, phone, email, location } = cv;
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

            <div className='info__contact'>
              <div className='info-label'>
                <div className='icon-container'>
                  <i className='fas fa-phone-alt' />
                </div>
                <div className='info-data'>
                  <dt>Phone</dt>
                  <dd>{phone}</dd>
                </div>
              </div>
            </div>
            <div className='info__contact '>
              <div className='info-label'>
                <div className='icon-container'>
                  <i className='fas fa-envelope' />
                </div>
                <div className='info-data'>
                  <dt>Email</dt>
                  <dd>{email}</dd>
                </div>
              </div>
            </div>
            <div className='info__contact '>
              <div className='info-label'>
                <div className='icon-container'>
                  <i className='fas fa-street-view' />
                </div>
                <div className='info-data'>
                  <dt>Location</dt>
                  <dd>{location}</dd>
                </div>
              </div>
            </div>
          </div>
          <div className='lenguaje-container'>
            <h4>Lenguajes</h4>
            <div className='lenguajes-container'>
              {lenguajes.map((lenguaje) => (<p>{lenguaje}</p>))}
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
        <Education education={education} />
      </div>
    </div>
  );
};

export default Curriculum;
