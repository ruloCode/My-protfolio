import React from 'react';
import './Provider.scss';
import Shape1 from '../../assets/shape1.png';
import Shape2 from '../../assets/shape2.png';

const Provider = ({ children }) => {
  return (
    <div className='provider'>
      <div className='social-media'>
        <a rel='noopener noreferrer' target='_blank' href='https://github.com/rulo-code'>
          <i className='fab fa-github' />
        </a>
        <a rel='noopener noreferrer' target='_blank' href='https://www.linkedin.com/in/andr%C3%A9s-santana-lizcano-a4b960191/'>
          <i className='fab fa-linkedin-in' />

        </a>
        <a rel='noopener noreferrer' target='_blank' href='https://twitter.com/rulo_code'>
          <i className='fab fa-twitter' />
        </a>
      </div>
      <img className='shape top-corner' src={Shape2} alt='shapeImage' />
      <img className='shape bottom-corner' src={Shape1} alt='shapeImage' />
      {children}
    </div>
  );
};

export default Provider;
