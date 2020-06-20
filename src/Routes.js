import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import PageAbout from './pages/About'
import NotFound from './pages/NotFound';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Home} exact={true} />
                <Route path='/about' component={PageAbout} exact={true} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
