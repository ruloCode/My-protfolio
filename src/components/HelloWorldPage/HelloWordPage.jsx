import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePhoto from '../../assets/perfilFinal.png';
import WorkImage from '../../assets/work.png';
import ProfileImage from '../../assets/profile.png';
import CoverContainer from '../Curriculum/CoverContainer/CoverContainer';
import { curriculum, portfolio } from '../../routes/paths';
import './HelloWordPage.scss';

const HelloWorld = ({ children }) => {
  return (
    <div className='hello-world'>
      <div className='hello-world__title'>
        <h1> Hello World </h1>
      </div>
      <div className='hello-world__profile'>
        <div className='profile-cover'>
          <CoverContainer />
        </div>
        <Link to={curriculum()}>
          <div className='image-container'>
            <img className='profile-icon' src={ProfileImage} alt='profile' />
            <dd>Curriculum</dd>
          </div>
        </Link>
        <Link to={portfolio()}>
          <div className='image-container'>
            <img className='profile-icon' src={WorkImage} alt='profile' />
            <dd>Portfolio</dd>
          </div>
        </Link>

      </div>
      <div className='hello-world__description'>
        <p>
          I&apos;m
          {' '}
          <span>Andres Santana</span>
          {' '}
          a web designer & front‑end developer
          focused on crafting clean  & user‑friendly experiences
        </p>

      </div>
    </div>
  );
};

export default HelloWorld;
