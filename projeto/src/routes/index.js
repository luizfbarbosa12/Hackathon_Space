import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './../pages/Home';
import Projects from './../pages/Projects';


function Routes() {
    return (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/project" component={Projects}/>
    </Switch>
    )
}

export default Routes;