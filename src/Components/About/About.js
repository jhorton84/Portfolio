import React, { Component } from 'react';
import './About.css';
import profile_image from '../../images/profile_image.jpg';

export default class About extends Component {
    render() {
        return (
            <div className='about-component'>
                <div className='about_title' >
                    <div className='about-title-inner'>
                        <h1>J.T. Horton</h1>
                        <p>Web Developer & Designer</p>
                        <div className='image-container'>
                            <img src={profile_image} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}