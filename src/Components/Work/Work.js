import React, { Component } from 'react';
import './Work.css';
import mtgPhoto from '../../images/MTG.png';
import taskRabbit from '../../images/TaskRabbit.png';
import { Link } from 'react-router-dom'

class Work extends Component {
    constructor() {
        super();
        this.state = {
            projects: [ 
                {
                    image: taskRabbit,
                    link: 'https://www.taskrabbit.com/'
                }, 
                {
                    image: mtgPhoto,
                    link: 'https://www.mtgbuilder.site/'
                } 
            ]
        }
    }
    render() {
        const { projects } = this.state;
        let myProjects = projects.map(e => {
            return (
                <span className='project-images'>
                    <a href={e.link}><img src={e.image} /></a>
                </span>
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