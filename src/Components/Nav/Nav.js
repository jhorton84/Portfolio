import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';


function Nav(props) {
    return (
        <nav>
            <div className='wrapper'>
                <div className='brand'>
                    {/* <img src='http://www.logospng.com/images/107/downloads-archive-page-5-of-10-free-logo-elements-107167.png' /> */}
                    <h3>Justin Horton:</h3> <h4 className='web'>Web Development</h4>
                </div>
                <ul>
                    <li><NavLink activeClassName='active' exact to='/home'>home</NavLink></li>
                    <li><NavLink activeClassName='active' exact to='/projects'>projects</NavLink></li>
                    <li><NavLink activeClassName='active' to='/skills'>skills</NavLink></li>
                    <li><NavLink activeClassName='active' to='/about'>about</NavLink></li>
                    <li><NavLink activeClassName='active' to='/contact'>contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;