import React from "react";
import { Switch, Route } from "react-router-dom";

// -----Components-----
import Work from './Components/Work/Work';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';


// ------Routes--------
export default (
    <Switch>
        <Route exact path='/' component={Work} />
        <Route exact path='/about' component={About} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/contact' component={Contact} />
    </Switch>
);