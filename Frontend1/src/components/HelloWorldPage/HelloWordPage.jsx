import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import WorkImage from '../../assets/work.png';
import ProfileImage from '../../assets/profile.png';
import CoverContainer from '../Curriculum/CoverContainer/CoverContainer';
import { curriculum, portfolio } from '../../routes/paths';
import Provider from '../Provider/Provider';
import './HelloWordPage.scss';

const FETCH_PROFILE_QUERY = gql`
  {
    getProfiles{
      slogan
      id
      username
      professionalProfile
      phone
      location
      languajes{
        id
      }
      softSkills{
        id
      }
      socialMedia{
        name
        id
      }
    }
  }
`;
const HelloWorld = () => {
  const { loading, error, data } = useQuery(FETCH_PROFILE_QUERY);
  if (loading) return 'Loading';
  if (error) return 'Error!';
  const { getProfiles } = data;
  const { professionalProfile, profileCover, slogan } = getProfiles[0];
  console.log(professionalProfile);
  return (
    <Provider>

      <div className='hello-world'>
        <div className='hello-world__title'>
          <h1> Hello World </h1>
        </div>
        <div className='hello-world__profile'>
          <div className='profile-cover'>
            <CoverContainer cover={profileCover} />
          </div>
          <Link to={curriculum()}>
            <div className='image-container'>
              <img className='profile-icon' src={ProfileImage} alt='profile' />
              <dd>Curriculum</dd>
            </div>
          </Link>
          <Link to={portfolio()}>
            <div className='image-container'>
              <img className='profile-icon' src={WorkImage} alt='profile' />
              <dd>Portfolio</dd>
            </div>
          </Link>

        </div>
        <div className='hello-world__description'>
          <p>
            I&apos;m
            {' '}
            <span>Andres Santana</span>
            {' '}
            {slogan}
          </p>

        </div>
      </div>
    </Provider>

  );
};

export default HelloWorld;
