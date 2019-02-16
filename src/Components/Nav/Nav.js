import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';


function Nav(props) {
    return (
        <nav>
            <div className='wrapper'>
                <div className='brand'>
                    <img src='http://www.logospng.com/images/107/downloads-archive-page-5-of-10-free-logo-elements-107167.png' />
                    <p>Dummy Data Development</p>
                </div>
                <ul>
                    <li><NavLink activeClassName='active' exact to='/'>work</NavLink></li>
                    <li><NavLink activeClassName='active' to='/about'>about</NavLink></li>
                    <li><NavLink activeClassName='active' to='/contact'>contact</NavLink></li>
                    <li><NavLink activeClassName='active' to='/resume'>resume</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;