import HelloWorld from '../components/HelloWorldPage/HelloWordPage';
import Portfolio from '../components/Portfolio/Portfolio';
import NotFound from '../components/Notfound/NotFound';
import Curriculum from '../components/Curriculum/Curriculum';
import Project from '../components/Portfolio/ProjectModal/Project';
import {
  helloWorld,
  curriculum,
  portfolio,
  project,
} from './paths';

export default [
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
