import React from 'react';

import './EducationArea.scss';

const EducationArea = ({ area }) => {
  console.log(area);
  return (
    <div className='education-area'>
      <div className='education-area__cover'>
        <img src='https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/escuelajs%20(1).jpg?alt=media&token=775ac02e-07c7-4198-aeab-0dd69ad63a69' alt='area ' />
      </div>
      <div className='education-area__info'>
        <h3>{area.areaname}</h3>
        <p>{area.description}</p>
        <dd>
          {area.courses.length}
        </dd>
      </div>
    </div>
  );
};

export default EducationArea;
