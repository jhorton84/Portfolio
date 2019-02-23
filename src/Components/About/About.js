import React, { Component } from 'react';
import './About.css';
import profile_image from '../../images/profile_image.jpg';

export default class About extends Component {
    render() {
        return (
            <div className='about-component'>
                <div className='about_title' >
                    <h1>Who is this guy?</h1>
                    <div className='about-title-inner'>
                        <div className='image-container'>
                            <img src={profile_image} />
                        </div>
                        <div>
                            <h2>J.T. Horton</h2>
                            <p>Web Developer & Designer</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}