import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Glide from '@glidejs/glide';
import routes from './routes';
import Provider from '../components/Provider/Provider';

const history = createBrowserHistory();


const App = () => (
  <BrowserRouter history={history}>

    <Provider>
      <Switch>
        {routes.map((route) => <Route key={route.path} {...route} />)}
      </Switch>
    </Provider>

  </BrowserRouter>
);

export default App;
