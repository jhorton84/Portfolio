import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';


function Nav(props) {
    
    return (
        <div className='nav'>
            <button onClick={()=> props.dropDownToggle()} >☰</button>
            <div className={ props.toggle ? 'wrapper showDropDown' : 'wrapper hideDropDown'}>
                <div className='brand'>
                    {/* <img src='http://www.logospng.com/images/107/downloads-archive-page-5-of-10-free-logo-elements-107167.png' /> */}
                    <h3>Justin Horton:</h3> <h4 className='web'>Web Development</h4>
                </div>
                
                <ul>
                    <li onClick={()=> props.dropDownToggle()}><NavLink activeClassName='active' exact to='/'>home</NavLink></li>
                    <li onClick={()=> props.dropDownToggle()}><NavLink activeClassName='active' exact to='/projects'>projects</NavLink></li>
                    <li onClick={()=> props.dropDownToggle()}><NavLink activeClassName='active' to='/skills'>skills</NavLink></li>
                    <li onClick={()=> props.dropDownToggle()}><NavLink activeClassName='active' to='/about'>about</NavLink></li>
                    <li onClick={()=> props.dropDownToggle()}><NavLink activeClassName='active' to='/contact'>contact</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;