import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import ProjectCard from '../ProjectCard/ProjectCard';
import Photo from '../../../assets/profile.png';
import './ProjectModal.scss';

const ProjectModal = () => {
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
  const photos = [
    {
      name: 'photo1',
      url: 'https://i.pinimg.com/originals/50/32/20/50322058dc13b4778baa2fa0f27f6ac8.jpg',
    },
    {
      name: 'photo1',
      url: 'https://static.platzi.com/media/avatars/Platzi-f730e65b-e92b-44d3-81c0-5c59c4dc4658.png',
    },
  ];
  
  return (
    <div className='project-modal'>

      <div className='images glide'>
        <div className='glide__track' data-glide-el='track'>
          <ul className='glide__slides'>

            <li className='glide__slide'>
              <img className='slide-image' src='https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/login.png?alt=media&token=d59f92d1-dc0d-4b08-b653-510d6dde36c3' />
            </li>
            <li className='glide__slide'>
              <img className='slide-image' src='https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/pepe.jpg?alt=media&token=cbab779b-5542-46aa-90bb-96773d7632ed' />
            </li>

          </ul>
        </div>
        <div className='glide__arrows' data-glide-el='controls'>
          <button className='glide__arrow glide__arrow--left' data-glide-dir='<'><i className='fas fa-chevron-circle-left' /></button>
          <button className='glide__arrow glide__arrow--right' data-glide-dir='>'><i className='fas fa-chevron-circle-right' /></button>
        </div>
      </div>
    </div>
  );
};
export default ProjectModal;
