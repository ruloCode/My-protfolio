import React from 'react';
import './Course.scss';

const Course = ({ course }) => {
  return (
    <div className='course-container'>
      <div className='course-container__cover'>
        <img src={course.cover} alt='course' />
      </div>
      <div className='course-container__info'>
        <h4>{course.name}</h4>
        <dd>{course.certificationdate}</dd>
      </div>
    </div>
  );
};

export default Course;
