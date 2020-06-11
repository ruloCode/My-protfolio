import React, { useState } from 'react';
import Course from '../Course/Course';
import './EducationArea.scss';

const EducationArea = ({ area }) => {
  const [showCourses, setShowCourses] = useState(false);
  return (
    <div className='education-area'>
      <div className='education-area__cover'>
        <img src='https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/escuelajs%20(1).jpg?alt=media&token=775ac02e-07c7-4198-aeab-0dd69ad63a69' alt='area ' />
      </div>
      <div className='education-area__info'>
        <h3>{area.areaname}</h3>
        <p>{area.description}</p>
        <dd onClick={() => {
          setShowCourses(!showCourses);
        }}
        >
          <span>{area.courses.length}</span>
          {' '}
          Courses
          <i className={showCourses ? 'fas fa-chevron-circle-down colapse' : 'fas fa-chevron-circle-down'} />
        </dd>

        <div className={showCourses ? 'info-courses' : 'info-courses hidden'}>
          {showCourses ? (
            <div className='courses-container'>
              {area.courses.map((course) => {
                return (
                  <Course course={course} />
                );
              })}
            </div>
          )

            : '' }
        </div>
      </div>
    </div>
  );
};

export default EducationArea;
