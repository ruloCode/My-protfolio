import React from 'react';

const ExperienceItem = ({ item }) => {
  return (
    <div className='experience-item'>
      {item.company}
    </div>
  );
};

export default ExperienceItem;
