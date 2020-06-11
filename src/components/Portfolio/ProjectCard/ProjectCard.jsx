import React from 'react';
import './ProjectCard.scss';

const ProjectCard = (props) => {
  const { onClick } = props;

  return (
    <div onClick={onClick} className='project-card'>
      <div className='project-card__cover'>
        <img src='https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/login.png?alt=media&token=d59f92d1-dc0d-4b08-b653-510d6dde36c3' />
      </div>
      <div className='project-card__info'>
        <h3>Kaizen</h3>
        <p>Description bla bla bla bla bla bla bla bla bl;a bla bla</p>
        <p>Description bla bla bla bla bla bla bla bla bl;a bla bla</p>
        <p>Description bla bla bla bla bla bla bla bla bl;a bla bla</p>
        <p>Description bla bla bla bla bla bla bla bla bl;a bla bla</p>
        <p>Description bla bla bla bla bla bla bla bla bl;a bla bla</p>
      </div>
    </div>
  );
};
export default ProjectCard;
