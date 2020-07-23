/* eslint-disable import/no-cycle */
import Home from '../components/Home/Home';
import Portfolio from '../components/Portfolio/Portfolio';
import NotFound from '../components/Notfound/NotFound';
import Curriculum from '../components/Curriculum/Curriculum';
import Project from '../components/Portfolio/ProjectModal/Project';
import Upload from '../components/Upload/Upload';
import Login from '../components/Login/Login';

import {
  home,
  curriculum,
  portfolio,
  project,
  login,
  upload,
} from './paths';

export default [
  {
    path: login(),
    component: Login,
    exact: true,
  },
  {
    path: upload(),
    component: Upload,
    exact: true,
  },
  {
    path: home(),
    component: Home,
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
