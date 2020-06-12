import React from 'react';
import './Curriculum.scss';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';

import Experience from './Experience/Experience';
import Education from './Education/Education';
import NameContainer from './NameContainer/NameContainer';
import ProfileContainer from './ProfileContainer/ProfileContainer';
import ProfessionalProfile from './ProfessionalProfile/ProfessionalProfile';
import Provider from '../Provider/Provider';

const Curriculum = () => {
  const cv = useSelector((state) => state.user.cv);

  const { profesionalProfile, experience, education, phone, email, location } = cv;
  return (
    <Provider>
      <div className='curriculumn'>
        <Link className='go-back home' to='/'>
          <i className='fas fa-angle-double-left' />
        </Link>
        <NameContainer cv={cv} />
        <ProfileContainer phone={phone} email={email} location={location} />
        <div className='curriculumn__cv-container'>
          <ProfessionalProfile profesionalProfile={profesionalProfile} />
          <Experience experience={experience} />
          <Education education={education} />
        </div>
      </div>
    </Provider>

  );
};

export default Curriculum;
