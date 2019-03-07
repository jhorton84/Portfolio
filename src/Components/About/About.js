import React, { Component } from 'react';
import './About.css';
import profile_image from '../../images/profile_pic.jpg';
import htmlIcon from '../../images/skills_icons/icons8-html-5.svg';
import githubIcon from '../../images/skills_icons/icons8-github.svg';
import cssIcon from '../../images/skills_icons/icons8-css3.svg';
import reactIcon from '../../images/reactIcon.svg';
import javascriptIcon from '../../images/skills_icons/icons8-javascript.svg';
import nodeIcon from '../../images/skills_icons/icons8-nodejs.svg';
// import npmIcon from '../../images/skills_icons/icons8-npm.svg';

export default class About extends Component {
    constructor() {
        super();
        this.state = {
            icons: [
                {
                    image:reactIcon,
                    name: 'React.js'
                },
                {
                    image:htmlIcon,
                    name: 'HTML 5'
                },
                {
                    image:githubIcon,
                    name: 'Github'
                },
                {
                    image:cssIcon,
                    name: 'CSS 3'
                },
                {
                    image:javascriptIcon,
                    name: 'JavaScript'
                },
                {
                    image:nodeIcon,
                    name: 'Node.js'
                },

            ]
        }
    }
    render() {
        const { icons } = this.state;
        let mappedIcons = icons.map(e => {
            return (
                <div className='icons'>
                    <div className='icon-image-container'>
                        <img src={e.image}/>
                    </div>
                    <p>{e.name}</p>
                </div>
            )
        })
        return (
            <div className='about-component'>
                <div className='about-inner'>
                    <div className='about_title' >
                        <h1>ABOUT ME</h1>
                        {/* <h2>J.T. Horton</h2>
                        <p>Web Developer & Designer</p> */}
                    </div>
                    <div className='about-main'>
                        <div className='top-container'>
                            <div className='image-container'>
                                <img src={profile_image} />
                            </div>
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
                        <div className='bottom-container'>
                            <div className='icons-container'>
                                <div className='icon-row'>
                                    {mappedIcons}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}