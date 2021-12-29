import React from 'react';
import './App.css';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import LoginPage from './Pages/LoginPage';
import RegistrationForm from './Pages/RegistrationForm';
import Dashboard from './Pages/DashBoard';

import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import HelpPage from './Pages/HelpPage';



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
