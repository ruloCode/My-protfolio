import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePhoto from '../../assets/perfilFinal.png';
import WorkImage from '../../assets/work.png';
import ProfileImage from '../../assets/profile.png';
import { curriculum, portfolio } from '../../routes/paths';
import './HelloWordPage.scss';

const HelloWorld = ({ children }) => {
  return (
    <div className='hello-world'>
      <div className='hello-world__title'>
        <h1> Hello World </h1>
      </div>
      <div className='hello-world__profile'>
        <Link to={curriculum()}>
          <div className='hello-world__profile__image-container'>
            <img className='profile-image' src={ProfileImage} alt='profile' />
            <p>Curriculum</p>
          </div>
        </Link>

        <div className='hello-world__profile__image-container profile'>
          <img className='profile-image' src={ProfilePhoto} alt='profile' />

        </div>
        <Link to={portfolio()}>
          <div className='hello-world__profile__image-container'>
            <img className='profile-image' src={WorkImage} alt='profile' />
            <p>Portfolio</p>
          </div>
        </Link>

      </div>
      <div className='hello-world__description'>
        <p>
          I&apos;m Andres Santana a web designer & front‑end developer
          focused on crafting clean  & user‑friendly experiences
        </p>

      </div>
    </div>
  );
};

export default HelloWorld;
