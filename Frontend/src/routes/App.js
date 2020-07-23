import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthProvider } from '../context/auth';
import routes from './routes';
import 'semantic-ui-css/semantic.min.css';

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <Switch>
        {routes.map((route) => <Route key={route.path} {...route} />)}
      </Switch>
    </AuthProvider>

  </BrowserRouter>
);

export default App;
