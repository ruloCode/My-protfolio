/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import './Course.scss';
import Modal from '../../Modal/Modal';
import Certificate from '../../../assets/certificate.png';

const Course = ({ course }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='course-container'>
      <div className='course-container__cover'>
        <img src={course.cover} alt='course' />
      </div>
      <div onClick={handleClose} className='course-container__info'>
        <h4>{course.name}</h4>
        <dd>
          {course.certificationdate}
          <img className='diplom' src={Certificate} alt='certificate' />
        </dd>

        <Modal onClose={handleClose} isOpen={isOpen}>
          <a rel='noopener noreferrer' target='_blank' href='#'>
            <img src={course.diplom} alt='diplom' />
          </a>

        </Modal>

      </div>
    </div>
  );
};

export default Course;
