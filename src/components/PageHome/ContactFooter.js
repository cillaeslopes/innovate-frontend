import React, { Component } from 'react'

const INSTA_LINK = process.env.REACT_APP_INSTA_LINK
const FACE_LINK = process.env.REACT_APP_FACE_LINK
const DRIVE_LINK = process.env.REACT_APP_DRIVE_LINK
const GMAIL = process.env.REACT_APP_GMAIL

const iconDrive = require('../../assets/images/iconDrive.png');
const iconFacebook = require('../../assets/images/iconFacebook.png');
const iconGmail = require('../../assets/images/iconGmail.png');
const iconInsta = require('../../assets/images/iconInsta.png');

class ContactFooter extends Component {
    render() {
        return (
            <div id='contact-footer'>
                <a className='contact' href={INSTA_LINK} target='_blank' rel="noopener noreferrer">
                    <img src={iconInsta} alt='Instagram logo'></img>
                    innovatemeetup
                </a>

                <a className='contact' href={FACE_LINK} target='_blank' rel="noopener noreferrer">
                    <img src={iconFacebook} alt='Facebook logo'></img>
                    innovatemeetup
                </a>

                <a className='contact' href={DRIVE_LINK} target='_blank' rel="noopener noreferrer">
                    <img src={iconDrive} alt='Google Drive logo'></img>
                    bit.ly/innovatemeetup
                </a>

                <a className='contact' href={`mailto:${GMAIL}`} target='_blank' rel="noopener noreferrer">
                    <img src={iconGmail} alt='Gmail logo'></img>
                    innovate.meetup@gmail.com
                </a>
            </div>
        )
    }
} export default ContactFooter