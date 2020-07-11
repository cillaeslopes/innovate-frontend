import React from 'react'
import { FooterStyled, ContactIcon, Contact, FooterWrapper } from './styled'
import instagramIcon from '../../assets/images/iconInsta.svg'
import facebookIcon from '../../assets/images/iconFacebook.svg'
import gmailIcon from '../../assets/images/iconGmail.svg'
import driveIcon from '../../assets/images/iconDrive.svg'

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
        <FooterWrapper>
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
        </FooterWrapper>
    </FooterStyled>
)

export default Footer
