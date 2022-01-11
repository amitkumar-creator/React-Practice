import React from 'react';
import './App.css';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import LoginPage from './Pages/LoginPage';
import RegistrationForm from './Pages/RegistrationForm';
import Dashboard from './Pages/DashBoard';



function App() {
  const matchPath = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/registration" component={RegistrationForm} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>

    </>
  );
}

export default App;
