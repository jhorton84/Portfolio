import React, { Component } from 'react';
import './About.css';
import profile_image from '../../images/profile_image.jpg';
import htmlIcon from '../../images/skills_icons/icons8-html-5.svg';
import githubIcon from '../../images/skills_icons/icons8-github.svg';
import cssIcon from '../../images/skills_icons/icons8-css3.svg';
import reactIcon from '../../images/reactIcon.svg';
import javascriptIcon from '../../images/skills_icons/icons8-javascript.svg';
import nodeIcon from '../../images/skills_icons/icons8-nodejs.svg';
// import npmIcon from '../../images/skills_icons/icons8-npm.svg';

export default class About extends Component {
    render() {
        return (
            <div className='about-component'>
                <div className='about-inner'>
                    <div className='about_title' >
                        <h1>ABOUT ME</h1>
                        {/* <h2>J.T. Horton</h2>
                        <p>Web Developer & Designer</p> */}
                    </div>
                    <div className='about-main'>
                        <div className='left-container'>
                            <div className='image-container'>
                                <img src={profile_image} />
                            </div>
                            <div className='icons-container'>
                                <div className='icon-row'>
                                    <div className='icons'>
                                        <img src={reactIcon}/>
                                        <p>REACT.js</p>
                                    </div>
                                    <div className='icons'>
                                        <img src={htmlIcon} />
                                        <p>HTML 5</p>
                                    </div>
                                </div>
                                <div className='icon-row'>
                                    <div className='icons'>
                                        <img src={githubIcon} />
                                        <p>Github</p>
                                    </div>
                                    <div className='icons'>
                                        <img src={cssIcon} />
                                        <p>CSS 3</p>
                                    </div>
                                </div>
                                <div className='icon-row'>
                                    <div className='icons'>
                                        <img src={javascriptIcon} />
                                        <p>JavaScript</p>
                                    </div>
                                    <div className='icons'>
                                        <img src={nodeIcon} />
                                        <p>Node.js</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='right-container'>
                            <div className='about-body'>
                                <p>I have always been passionate about being creative as well as problem solving. Web development has allowed me to mix both of those passions together and is not only a way for me to support my family, but also a hobby. I'm always looking to grow my knowledge as a developer and currently specialize in React, CSS, HTML, Redux, Node.js, and PostgresSQL.  </p>
                                <p className='second-body'>Before learning web development I worked in retail as a salesman and in leadership positions. I was fortunate enough to then be able to work as a graphic designer for a small company for several years which eventually led to me learning web development and where I am today.</p>
                                <p>The things I enjoy outside of work are:</p>
                                <ul>
                                    <li>Spending time with my daughter.</li>
                                    <li>Playing strategy board games and video games with my identical twin brother.</li>
                                    <li>Playing Golf.</li>
                                    <li>Reading Fiction and Non-fiction.</li>
                                    <li>Traveling.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}