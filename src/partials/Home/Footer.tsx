import React from 'react'
import { FooterStyled, ContactIcon, Contact, FooterWrapper } from './styled'
import instagramIcon from '../../assets/images/iconInsta.png?resize&min=25&max=75&ts-asset'
import facebookIcon from '../../assets/images/iconFacebook.png?resize&min=25&max=75&ts-asset'
import gmailIcon from '../../assets/images/iconGmail.png?resize&min=25&max=75&ts-asset'
import driveIcon from '../../assets/images/iconDrive.png?resize&min=25&max=75&ts-asset'

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
                <ContactIcon
                    src={instagramIcon}
                    srcSet={instagramIcon.srcSet}
                />
                {SOCIAL_MEDIA}
            </Contact>

            <Contact href={links.facebook}>
                <ContactIcon src={facebookIcon} srcSet={facebookIcon.srcSet} />
                {SOCIAL_MEDIA}
            </Contact>

            <Contact href={links.googleDrive}>
                <ContactIcon src={driveIcon} srcSet={driveIcon.srcSet} />{' '}
                {GOOGLE_DRIVE}
            </Contact>

            <Contact href={links.gmail}>
                <ContactIcon src={gmailIcon} srcSet={gmailIcon.srcSet} />
                {EMAIL}
            </Contact>
        </FooterWrapper>
    </FooterStyled>
)

export default Footer
