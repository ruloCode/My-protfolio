/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';

import './Slides.scss';

const Slides = () => {
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
    <div className='glider-containe'>
      <div className='images glide'>
        <div className='glide__track' data-glide-el='track'>
          <ul className='glide__slides'>

            <li className='glide__slide'>
              <div className='image-slide-container'>
                <img alt='slide' className='slide-image' src='https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/login.png?alt=media&token=d59f92d1-dc0d-4b08-b653-510d6dde36c3' />
              </div>
            </li>

          </ul>
        </div>
        <div className='glide__arrows' data-glide-el='controls'>
          <button type='button' className='glide__arrow glide__arrow--left' data-glide-dir='<'><i className='fas fa-chevron-circle-left' /></button>
          <button type='button' className='glide__arrow glide__arrow--right' data-glide-dir='>'><i className='fas fa-chevron-circle-right' /></button>
        </div>
      </div>
    </div>
  );
};
export default Slides;
