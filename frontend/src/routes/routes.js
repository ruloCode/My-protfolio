import HelloWorld from '../components/HelloWorldPage/HelloWordPage';
import Portfolio from '../components/Portfolio/Portfolio';
import NotFound from '../components/Notfound/NotFound';
import Curriculum from '../components/Curriculum/Curriculum';
import Project from '../components/Portfolio/ProjectModal/Project';
import Login from '../components/Login/Login';

import {
  helloWorld,
  curriculum,
  portfolio,
  project,
  login,
} from './paths';

export default [
  {
    path: login(),
    component: Login,
    exact: true,
  },
  {
    path: helloWorld(),
    component: HelloWorld,
    exact: true,
  },
  {
    path: portfolio(),
    component: Portfolio,
    exact: true,
  },
  {
    path: curriculum(),
    component: Curriculum,
    exact: true,
  },
  {
    path: project(),
    component: Project,
    exact: true,
  },
  {
    path: null,
    component: NotFound,
    exact: false,
  },
];
