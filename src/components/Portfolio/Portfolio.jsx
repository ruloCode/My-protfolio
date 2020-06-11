import React, { useState } from 'react';
import './Portfolio.scss';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard/ProjectCard';
import Provider from '../Provider/Provider';

const Portfolio = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    console.log('modal open');
    setIsOpen(!isOpen);
  };
  return (
    <Provider>
      <div className='portfolio'>

        <div className='portfolio__header'>
          <Link className='go-back home' to='/'>
            <i className='fas fa-angle-double-left' />
          </Link>
          <h2>
            My Portfolio
          </h2>
        </div>
        <div className='portfolio__cards-container'>
          <Link to='/project/1'>
            <ProjectCard onClick={handleClose} />
          </Link>

        </div>

      </div>
    </Provider>

  );
};

export default Portfolio;
