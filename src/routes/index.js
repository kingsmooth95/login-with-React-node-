import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import Login from '../Login-Page';
import Signup from '../Signup-page';

export default () => (
    <BrowserRouter>
        <Route path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
    </BrowserRouter>
);