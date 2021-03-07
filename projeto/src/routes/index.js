import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './../pages/Home';
import Projects from './../pages/Projects';
import ProjectsDetails from './../pages/ProjectsDetails';


function Routes() {
    return (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/project" component={Projects}/>
        <Route path="/details-project" component={ProjectsDetails}/>
    </Switch>
    )
}

export default Routes;