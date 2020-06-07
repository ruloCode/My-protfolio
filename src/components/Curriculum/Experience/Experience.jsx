import React from 'react';
import ExperienceItem from '../ExperienceItem/ExperienceItem';

const Experience = ({ experience }) => {
  return (
    <div className='experience-item'>
      hola experiensa
      {experience.map((experienceItem)=> (
        <ExperienceItem item={experienceItem} />
      ))}
    </div>
  );
};

export default Experience;
