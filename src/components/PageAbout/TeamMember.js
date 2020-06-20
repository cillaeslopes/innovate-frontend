import React, { Component } from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';

class TeamMember extends Component {

    render () {
        return (
            <div id='member'>
                <img id='photo' src={this.props.photo} alt={this.props.name}/>
                <div id='info'>
                    <p id='name'>{this.props.name}</p>
                    <p id='mini-bio'>{this.props.minibio}</p>
                    <div id='social-media'>
                        <a href={this.props.insta} target='_blank' rel="noopener noreferrer">
                            <InstagramIcon className='social-media-icon'></InstagramIcon>
                        </a>
                        <a href={this.props.linkedin} target='_blank' rel="noopener noreferrer">
                            <LinkedInIcon className='social-media-icon'></LinkedInIcon>
                        </a>
                        <a href={`mailto:${this.props.mail}`} target='_blank' rel="noopener noreferrer">
                            <MailIcon className='social-media-icon'></MailIcon>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}


export default TeamMember;