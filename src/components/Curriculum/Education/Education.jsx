import React from 'react';
import EducationIcon from '../../../assets/education.png';
import EducationArea from '../EducationceItem/EducationArea';
import './Education.scss';

const Education = ({ education }) => {
  console.log(education);
  return (
    <div className='education'>
      <div className='education__header'>
        <img src={EducationIcon} alt='workicon' />
        <h3>Education</h3>

      </div>
      <div>
        {education.map((educationArea) => (
          <EducationArea area={educationArea} />
        ))}
      </div>

    </div>
  );
};

export default Education;
