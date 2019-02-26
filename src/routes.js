import React from "react";
import { Switch, Route } from "react-router-dom";

// -----Components-----
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';



// ------Routes--------
export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/about' component={About} />
        <Route exact path='/skills' component={Skills} />
        <Route exact path='/contact' component={Contact} />
    </Switch>
);