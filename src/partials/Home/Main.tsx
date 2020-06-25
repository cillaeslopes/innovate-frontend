import React from 'react'
import { Link } from '@material-ui/core'
import instagramIcon from '../../assets/images/iconInsta.png'
import facebookIcon from '../../assets/images/iconFacebook.png'
import gmailIcon from '../../assets/images/iconGmail.png'
import driveIcon from '../../assets/images/iconDrive.png'
import {
    MainStyled,
    UnicornImage,
    TitleContainer,
    Title,
    Footer,
    ContactIcon,
    Contact,
} from './styled'

const SOCIAL_MEDIA = '@innovatemeetup'
const GOOGLE_DRIVE = 'bit.ly/innovatemeetup'
const EMAIL = 'innovate.meetup@gmail.com'

const links = {
    instagram: 'https://www.instagram.com/innovatemeetup',
    facebook: 'https://www.facebook.com/innovate.meetup',
    gmail: 'mailto:innovate.meetup@gmail.com',
    googleDrive: 'http://bit.ly/innovatemeetup',
}

const Main: React.FunctionComponent = () => (
    <MainStyled>
        <UnicornImage alt="Unicórnio da Innovate de ladinho" />
        <TitleContainer>
            <Title>Innovate</Title>
        </TitleContainer>
        <Footer>
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
        </Footer>
    </MainStyled>
)

export default Main
