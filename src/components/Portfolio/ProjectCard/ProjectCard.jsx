/* eslint-disable react/jsx-indent */
import React from 'react';
import { withRouter } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { setProject } from '../../../redux/user/user.actions';
import './ProjectCard.scss';

const ProjectCard = (props) => {
  const dispatch = useDispatch();
  const { name, preview, id } = props;
  const onClick = () => {
    dispatch(setProject({ project: props }));
    props.history.push(`./project/${id}`);
  };
  return (
    <div tabIndex={0} role='button' onClick={onClick} className='project-card'>
      <div className='project-card__cover'>
        <img alt='project-cover' src={preview} />
      </div>
      <div className='project-card__info'>
        <h3>{name}</h3>
      </div>
    </div>
  );
};
export default withRouter(ProjectCard);
