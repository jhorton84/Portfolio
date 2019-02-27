import React, { Component } from 'react';
import './Projects.css';
import mtgPhoto from '../../images/MTG.png';
import taskRabbit from '../../images/TaskRabbit.png';
import rabbitMessages from '../../images/TrMessages.png';
import rabbitForm from '../../images/TRForm.png';
import magicBuilder from '../../images/magicBuilder.png';
import magicDecks from '../../images/magicDecks.png';
import githubIcon from '../../images/skills_icons/icons8-github.svg';


class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projects: [ 
                {
                    image: mtgPhoto,
                    link: 'https://www.mtgbuilder.site/',
                    project: "Personal Project: MTG Deck Builder",
                    smallImg1: magicBuilder,
                    smallImg2: magicDecks,
                    // smallImg3: '',
                    github: 'https://github.com/jhorton84/MTG-deckbuilder',
                    description: 'First solo developed site. This site was created using the scryfall.com api for Magic The Gathering. It allows a user to search through the data of cards images and select the ones they want to create decks that might be used for playing the game, commonly referred to as a "deck builder".'
                }, 
                {
                    image: taskRabbit,
                    // link: 'https://www.taskrabbit.com/',
                    link: function() { 
                        alert('Sorry! This site is temporarily under construction')
                    },
                    project: 'Group Project: Taskrabbit Clone',
                    smallImg1: rabbitMessages,
                    smallImg2: rabbitForm,
                    // smallImg3: rabbitAccount,
                    github: 'https://github.com/tiffzhong/task-rabbit',
                    description: 'REACT | NODE | REDUX | REDUX-PROMISE-MIDDLEWARE | GOOGLEMAPS | STRIPE | SLICK In a group of three individuals, cloned the taskrabbit.com site. Split up the project into two sides, the client user and the tasker user. Client side was about hiring the tasker side to fulfill tasks such as deliveries, home improvement, repairs, etc.'
                    
                }, 
            ]
        }
    }
    render() {
        const { projects } = this.state;
        let myProjects = projects.map(e => {
            return (
                <div className='projects'>
                     <div className='projects-inner'>
                        <div className='projects-main'>
                            <div className='large-image-container'>
                                <img src={e.image} />
                            </div>
                            <div className='project-name-container'>
                                <h2>{e.project}</h2>
                                <p>{e.description}</p>
                                <div className='project-links'>
                                    <a href={e.link}  target='_blank' onClick={e.link}>
                                        <button  >Go to Site</button>
                                    </a>
                                    <a href={e.github} target='_blank' ><button>Visit Github Repo</button></a>
                                    {/* <p>Visit the Github Repo</p> */}
                                </div>
                            </div>
                        </div>
                        <div className='small-images'>
                            <img src={e.smallImg1} />
                            <img src={e.smallImg2} />
                            {/* <img src={e.smallImg3} /> */}
                        </div>
                     </div>
                </div>
            )
        })
        return (
            <div className='Projects-component'>
                <div>
                    {/* <div className='title'>
                        <div className='title-inner'>
                            <h1>J.T. Horton</h1>
                            <p>Web Developer & Designer</p>
                        </div>
                    </div> */}
                    <div className='project-title'>
                        <h1>PROJECTS</h1>
                    </div>
                    <div className='myProjects-container'>
                        <div className='myProjects'>
                            {myProjects}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;