/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import { Link } from 'react-router-dom';
import './Project.scss';
import Kaizen from '../../../assets/kaizen.png';

const Project = () => {
  useEffect(() => {
    new Glide('.images', {
      type: 'carousel',
      perView: 1,
      focusAt: 'center',
      gap: 40,
      keyboard: true,
      dragThreshold: true,
    }).mount();
  }, []);
  return (
    <div className='project'>
      <div className='project__header'>
        <Link className='go-back' to='/portfolio'>
          <i className='fas fa-angle-double-left' />
        </Link>
        <div className='project-cover'>
          <img src={Kaizen} alt='logo-kaizen' />
        </div>
        <h2>Project name</h2>

      </div>
      <div className='images glide'>
        <div className='glide__track' data-glide-el='track'>
          <ul className='glide__slides'>

            <li className='glide__slide'>
              <div className='image-slide-container'>
                <img alt='slide' className='slide-image' src='https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/login.png?alt=media&token=d59f92d1-dc0d-4b08-b653-510d6dde36c3' />
              </div>
            </li>
            <li className='glide__slide'>
              <div className='image-container'>
                <img alt='slide' className='slide-image' src='https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/pepe.jpg?alt=media&token=cbab779b-5542-46aa-90bb-96773d7632ed' />
              </div>
            </li>

          </ul>
        </div>
        <div className='glide__arrows' data-glide-el='controls'>
          <button type='button' className='glide__arrow glide__arrow--left' data-glide-dir='<'><i className='fas fa-chevron-circle-left' /></button>
          <button type='button' className='glide__arrow glide__arrow--right' data-glide-dir='>'><i className='fas fa-chevron-circle-right' /></button>
        </div>
      </div>

      <div className='project__info'>
        <div className='info-buttons'>
          <a className='live' href='#'>Go live</a>
          <a className='code' href='#'>
            View code
            <i className='fab fa-github' />
          </a>
        </div>
        <div className='description'>
          <h3>Description</h3>
          <p>
            Open source web application for managing clinical laboratory tests.
          </p>
        </div>
        <div className='technology'>
          <h3> Technologies</h3>
          <p>react</p>
          {' '}
          <p>react</p>
          {' '}
          <p>react</p>
          {' '}
          <p>react</p>
          {' '}
          <p>react</p>
        </div>
      </div>
    </div>
  );
};
export default Project;
