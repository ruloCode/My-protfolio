/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { withRouter, Redirect } from 'react-router-dom';

import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import { Link } from 'react-router-dom';
import './Project.scss';
import { useSelector } from 'react-redux';
import Kaizen from '../../../assets/kaizen.png';

const Project = (props) => {
  const project = useSelector((state) => state.user.project);
  const {
    gallery,
    name,
    description,
    liveurl,
    repository,
    technologies,
    id,
  } = project;

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
  const renderSlide = (slide) => {
    if (slide.type === 'image') {
      return (
        <img alt='slide' className='slide-image' src={slide.url} />

      );
    }
    if (slide.type === 'video') {
      return (
        <iframe
          title='project-video'
          width='560'
          height='315'
          src={slide.url}
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      );
    }
    return null;
  };
  return (
    <div>

      <div className='project'>
        <div className='images glide'>
          <div className='glide__track' data-glide-el='track'>
            <ul className='glide__slides'>

              {gallery.map((slide) => {
                return (
                  <li className='glide__slide'>
                    <div className='image-slide-container'>
                      {renderSlide(slide)}
                    </div>
                  </li>
                );
              })}

            </ul>
          </div>
          <div className='glide__arrows' data-glide-el='controls'>
            <button type='button' className='glide__arrow glide__arrow--left' data-glide-dir='<'><i className='fas fa-chevron-circle-left' /></button>
            <button type='button' className='glide__arrow glide__arrow--right' data-glide-dir='>'><i className='fas fa-chevron-circle-right' /></button>
          </div>
        </div>
        <div className='project__header'>
          <Link className='go-back' to='/portfolio'>
            <i className='fas fa-angle-double-left' />
          </Link>
          <div className='project-cover'>
            <img src={Kaizen} alt='logo-kaizen' />
          </div>
          <h2>{name}</h2>

        </div>

        <div className='project__info'>
          <div className='info-buttons'>
            <a className='live' href={liveurl}>Go live</a>
            <a className='code' href={repository}>
              View code
              <i className='fab fa-github' />
            </a>
          </div>
          <div className='description'>
            <h3>Description</h3>
            <p>
              {description}
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

    </div>

  );

};
export default withRouter(Project);
