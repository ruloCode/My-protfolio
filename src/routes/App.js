import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';
import Provider from '../components/Provider/Provider'

const App = () => (
  <BrowserRouter>

  <Provider>
    <Switch>
      {routes.map((route) => <Route key={route.path} {...route} />)}
    </Switch>
  </Provider>
    
  </BrowserRouter>
);

export default App;
