import React, { Component } from 'react';
import './Skills.css';
import htmlIcon from '../../images/skills_icons/icons8-html-5.svg';
import githubIcon from '../../images/skills_icons/icons8-github.svg';
import cssIcon from '../../images/skills_icons/icons8-css3.svg';
import reactIcon from '../../images/reactIcon.svg';
import javascriptIcon from '../../images/skills_icons/icons8-javascript.svg';
import nodeIcon from '../../images/skills_icons/icons8-nodejs.svg';
import npmIcon from '../../images/skills_icons/icons8-npm.svg';
import { Link } from 'react-router-dom';

export default class Skills extends Component {
    render() {
        return (
            <div className='skills-component'>
                <div className='skills-inner-container'>
                    <div>
                        <img src={reactIcon}/>
                        <p>REACT.js</p>
                    </div>
                    <div>
                        <img src={htmlIcon} />
                        <p>HTML 5</p>
                    </div>
                    <div>
                        <img src={cssIcon} />
                        <p>CSS 3</p>
                    </div>
                    <div>
                        <img src={githubIcon} />
                        <p>Github</p>
                    </div>
                    <div>
                        <img src={javascriptIcon} />
                        <p>JavaScript</p>
                    </div>
                    <div>
                        <img src={nodeIcon} />
                        <p>NODE.js</p>
                    </div>
                    <div>
                        <img src={npmIcon} />
                        <p>NPM</p>
                    </div>
                </div>
                <div className='descriptions'>
                    <div className='skill_description'>
                        <div className='skill-title'>
                            <h2>REACT </h2>
                        </div>
                        <div className='skill-body'>
                            <p>
                                I have received training in the REACT.js framework and love its simplicity. I use Redux mostly to help manage my state and am currently looking into the new technology of Hooks that was released earlier in February of 2019.
                            </p>
                        </div>
                    </div >
                    <div className='skill_description'>
                        <div className='skill-title'>
                            <h2>HTML & CSS </h2>
                        </div>
                        <div className='skill-body'>
                            <p>I absolutely love designing the layout and look of a website and solving aesthetic problems and challenges such as responsive design and using transitions. I'm always looking to improve my skills and grow my knowledge of available resources and tools. I have a passion for style and love seeing what others are doing as well.</p>
                        </div>
                    </div>
                    <div className='skill_description'>
                        <div className='skill-title'>
                            <h2>GITHUB </h2>
                        </div>
                        <div className='skill-body'>
                            <p>Github is a staple when working on projects. I try to keep my profile up to date at all times as well as see what other friends are doing. Check out my profile <a href='https//github.com/jhorton84'>here</a>
                            </p>
                        </div>
                    </div>
                    <div className='skill_description'>
                        <div className='skill-title'>
                            <h2>JavaScript </h2>
                        </div>
                        <div className='skill-body'>
                            <p>
                                All my code is in JS. I build React based website applications and use JS for both my front and back ends by implementing Node.
                            </p>
                        </div>
                    </div>
                    <div className='skill_description'>
                        <div className='skill-title'>
                            <h2>NODE & NPM </h2>
                        </div>
                        <div className='skill-body'>
                            <p>
                                Currently I use Node for my back-end development with JS and install libraries I use with either NPM or Yarn.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}