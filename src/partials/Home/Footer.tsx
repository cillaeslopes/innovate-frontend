import React from 'react'
import { FooterStyled, ContactIcon, Contact } from './styled'
import instagramIcon from '../../assets/images/iconInsta.png'
import facebookIcon from '../../assets/images/iconFacebook.png'
import gmailIcon from '../../assets/images/iconGmail.png'
import driveIcon from '../../assets/images/iconDrive.png'

const SOCIAL_MEDIA = '@innovatemeetup'
const GOOGLE_DRIVE = 'bit.ly/innovatemeetup'
const EMAIL = 'innovate.meetup@gmail.com'

const links = {
    instagram: 'https://www.instagram.com/innovatemeetup',
    facebook: 'https://www.facebook.com/innovate.meetup',
    gmail: 'mailto:innovate.meetup@gmail.com',
    googleDrive: 'http://bit.ly/innovatemeetup',
}

const Footer: React.FunctionComponent = () => (
    <FooterStyled>
        <Contact href={links.instagram}>
            <ContactIcon src={instagramIcon} />
            {SOCIAL_MEDIA}
        </Contact>

        <Contact href={links.facebook}>
            <ContactIcon src={facebookIcon} />
            {SOCIAL_MEDIA}
        </Contact>

        <Contact href={links.googleDrive}>
            <ContactIcon src={driveIcon} /> {GOOGLE_DRIVE}
        </Contact>

        <Contact href={links.gmail}>
            <ContactIcon src={gmailIcon} />
            {EMAIL}
        </Contact>
    </FooterStyled>
)

export default Footer
