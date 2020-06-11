import React, { useState } from 'react';
import './Portfolio.scss';
import Slider from 'react-slick';
import ProjectCard from './ProjectCard/ProjectCard';
import Modal from '../Modal/Modal';
import ProjectModal from './ProjectModal/ProjectModal';

const Portfolio = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    console.log('modal open');
    setIsOpen(!isOpen);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='portfolio'>
      <div className='portfolio__header'>
        <h2>
          My Portfolio
        </h2>
      </div>
      <div className='portfolio__cards-container'>
        <ProjectCard onClick={handleClose} />

      </div>
      <Modal onClose={handleClose} isOpen={isOpen}>
        <ProjectModal />

      </Modal>
    </div>
  );
};

export default Portfolio;
