import React from 'react';

import './ExperienceItem.scss';

const ExperienceItem = ({ item }) => {
  const { company, cover, role, contract, startDate, endDate, description } = item;
  return (
    <div className='experience-item'>
      <div className='experience-item__cover'>
        <img src={cover} alt='cover' />
      </div>
      <div className='experience-item__info'>
        <h4>{role}</h4>
        <div className='company'>
          <p>{company}</p>
          <span>
            -
          </span>
          <p className='company-contract'>{contract}</p>
        </div>
        <div className='time'>
          <p>{startDate}</p>
          <span>
            -
          </span>
          <p>
            {endDate}
          </p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;
