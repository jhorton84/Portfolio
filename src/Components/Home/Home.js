import React, { Component } from 'react';
import './Home.css';
import profile_image from '../../images/profile_pic.jpg';


class Home extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    render() {
        
        return (
            <div className='home-component'>
                <div className='header'>
                    <div className='title'>
                        <div className='title-inner'>
                            <h1>J.T. Horton</h1>
                            <p>Web Developer & Designer</p>
                        </div>
                    </div>
                    <div className='home-image'>
                        <img src={profile_image} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;