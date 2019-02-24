import React, { Component } from 'react';
import './Work.css';
import mtgPhoto from '../../images/MTG.png';
import taskRabbit from '../../images/TaskRabbit.png';
import { Link } from 'react-router-dom';
import rabbitMessages from '../../images/TrMessages.png';
import rabbitForm from '../../images/TRForm.png';
import rabbitAccount from '../../images/TRAccount.png';
import magicBuilder from '../../images/magicBuilder.png';
import magicDecks from '../../images/magicDecks.png';



class Work extends Component {
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
                    // smallImg3: ''
                }, 
                {
                    image: taskRabbit,
                    link: 'https://www.taskrabbit.com/',
                    project: 'Group Project: Taskrabbit Clone',
                    smallImg1: rabbitMessages,
                    smallImg2: rabbitForm,
                    // smallImg3: rabbitAccount
                }, 
            ]
        }
    }
    render() {
        const { projects } = this.state;
        let myProjects = projects.map(e => {
            return (
                <div className='projects'>
                     <div className='projects-main'>
                        <div className='large-image'>
                            <img src={e.image} />
                            <h2>{e.project}</h2>
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
            <div className='work-component'>
                <div>
                    <div className='title'>
                        <div className='title-inner'>
                            <h1>J.T. Horton</h1>
                            <p>Web Developer & Designer</p>
                        </div>
                    </div>
                    <div className='skills'>
                        <h1>Projects</h1>
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

export default Work;