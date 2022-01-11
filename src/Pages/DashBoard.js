import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Navbar from '../Component/Navbar';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import HelpPage from './HelpPage';
import CartItem from './CartItem';


function Dashboard() {

    const matchPath = useRouteMatch();
    return (
        <>
            <Navbar matchPath={matchPath} />
            <Switch>
                <Route path="/dashboard">
                    <Route exact path={`/dashboard`} component={HomePage} />
                    <Route exact path={`${matchPath.path}/about`} component={AboutPage} />
                    <Route path={`${matchPath.path}/contact`} component={ContactPage} />
                    <Route path={`${matchPath.path}/help`} component={HelpPage} />
                     <Route path={`${matchPath.path}/cart`} component={CartItem} />
                </Route>
            </Switch>
        </>
    );
}

export default Dashboard;