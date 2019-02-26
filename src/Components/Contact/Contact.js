import React, { Component } from 'react';
import './Contact.css';
import githubIcon from '../../images/skills_icons/icons8-github.svg';
import LinkedInIcon from '../../images/skills_icons/icons8-linkedin.svg';

export default class Contact extends Component {
    render() {
        return (
            <div className='contact-component'>
                <div className='contact-title'>
                    <h1>CONTACT ME</h1>
                </div>
                <div className='contact-inner-container'>
                    <div className='contact-form'>
                        <form action="https://formspree.io/justin.horton13@gmail.com" method="POST" >
                            {/* <input type="text" name="name"></input> */}
                            <textarea type="email" name="message" placeholder='send me an email'></textarea>
                            <div className='sub-button-container'>
                                <input type="submit" value="Send" className='submit-button'></input>
                            </div>
                        </form>
                        <div className='icon-container' >
                            <div className='icon'>
                                <a href='https://github.com/jhorton84' target='_blank'><img src={githubIcon} /></a>
                                <p>My Github</p>
                            </div>
                            <div className='icon'>
                                <a href='https://www.linkedin.com/in/justin-horton13/' target='_blank'><img src={LinkedInIcon} /></a>
                                <p>My LinkedIn</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}