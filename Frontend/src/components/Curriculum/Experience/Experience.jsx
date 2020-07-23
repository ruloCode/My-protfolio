/* eslint-disable react/no-array-index-key */
import React from 'react';
import ExperienceItem from '../ExperienceItem/ExperienceItem';
import WorkIcon from '../../../assets/work.png';

import './Experience.scss';

const Experience = ({ experience }) => {
  return (
    <div className='experience'>
      <div className='experience__header'>
        <img src={WorkIcon} alt='workicon' />
        <h3>Experience</h3>
      </div>
      {experience.map((experienceItem, index) => (
        <ExperienceItem key={index} item={experienceItem} />
      ))}
    </div>
  );
};

export default Experience;
