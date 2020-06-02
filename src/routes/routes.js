import HelloWorld from '../components/HelloWorldPage/HelloWordPage';
import Portfolio from '../components/Portfolio/Porfolio'
import NotFound from '../components/Notfound/NotFound'
import Curriculum from '../components/Curriculum/Curriculum';

import {
  helloWorld,
  curriculum,
  portfolio,
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
    path: null,
    component: NotFound,
    exact: false,
  },
];
