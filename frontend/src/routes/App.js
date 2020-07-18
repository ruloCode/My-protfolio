import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import 'semantic-ui-css/semantic.min.css';

import routes from './routes';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        {routes.map((route) => <Route key={route.path} {...route} />)}
      </Switch>
    </Provider>

  </BrowserRouter>
);

export default App;
