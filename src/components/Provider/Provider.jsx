/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { withRouter } from 'react-router-dom';
import Shape2 from '../../assets/shape2.png';
import cv from '../../cv';
import ContactContainer from './ContactContainer/ContactContainer';

import './Provider.scss';

const Provider = (props) => {
  const { children, history } = props;
  const path = history.location.pathname;
  const renderPath = () => {
    if (path === '/portfolio') {
      return true;
    }
    if (path === '/') {
      return true;
    }
    return false
  };

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
      {children}
      <ContactContainer isOpen={renderPath()} cv={cv} />

    </div>
  );
};

export default withRouter(Provider);
