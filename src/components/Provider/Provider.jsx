/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { withRouter } from 'react-router-dom';
import cv from '../../cv';
import ContactContainer from './ContactContainer/ContactContainer';
import VectorBlue from '../../assets/Vector-blue.png';
import Shadow from '../../assets/shadow.png';
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
      <img className='shape top-corner' src={VectorBlue} alt='shapeImage' />
      <img className='shape top-corner shadow' src={Shadow} alt='shapeImage' />
      {children}
      <ContactContainer isOpen={renderPath()} cv={cv} />

    </div>
  );
};

export default withRouter(Provider);
