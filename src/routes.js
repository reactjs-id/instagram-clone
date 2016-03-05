import React from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import createHashHistory from 'history/lib/createHashHistory';
import { Router, Route, IndexRoute } from 'react-router';

import Container from './Container';
import About from './pages/About';
import Home from './pages/Home';

let history;

if(!global.__SERVER__) history =  (Modernizr && Modernizr.history)? createBrowserHistory(): createHashHistory();

let routes = (
    <Router history={history}>
        <Route path="/" component={Container}>
            <IndexRoute component={Home} />
            <Route path="about" component={About} />
        </Route>
    </Router>
)

export default routes;