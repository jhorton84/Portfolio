import React, { Component } from 'react';
import './Home.css';
import profile_image from '../../images/profile_image.jpg';


class Home extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    render() {
        
        return (
            <div className='home-component'>
                <div className='background-image'>
                    <img src='https://www.newgenapps.com/hubfs/canvas/images/parallax/Website-Design-Background.png' />
                </div>
                <header>
                    <div className='title'>
                        <div className='title-inner'>
                            <h1>J.T. Horton</h1>
                            <p>Web Developer & Designer</p>
                        </div>
                    </div>
                    <div className='home-image'>
                        <img src={profile_image} />
                    </div>
                </header>
            </div>
        );
    }
}

export default Home;