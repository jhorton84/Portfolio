import React from "react";
import { Switch, Route } from "react-router-dom";

// -----Components-----
import Work from './Components/Work/Work';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';


// ------Routes--------
export default (
    <Switch>
        <Route exact path='/Portfolio' component={Work} />
        <Route exact path='/Portfolio/about' component={About} />
        <Route exact path='/Portfolio/skills' component={Skills} />
        <Route exact path='/Portfolio/contact' component={Contact} />
    </Switch>
);