import React from 'react';
import ProfilePhoto from '../../assets/perfilFinal.png';

import './Curriculum.scss';

const Curriculum = () => {
  return (
    <div className='curriculumn'>
      <div className='curriculumn_name-container'>
        <h2>Andrés Santana</h2>
        <p>Frontend web developer & UI Designer</p>
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
            I am interested in get further, as a front end web developer I be able to build creative solves and maintaining websites using the best practices in the scope. Passionate about team working and Identifying innovative ideas according to project requirements
            proficient in technologies like HTML, CSS, JavaScript, Jest plus modern libraries and frameworks like React.v
          </p>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
