import React from 'react'
import {
    SocialMediaContainer,
    SocialMediaIcon,
    SocialMediaButton,
} from './styled'
import instagramIcon from '../../assets/images/instagram.png?resize&min=50&max=150&ts-asset'
import slackIcon from '../../assets/images/slack.png?resize&min=50&max=150&ts-asset'
import facebookIcon from '../../assets/images/facebook.png?resize&min=50&max=150&ts-asset'

const SocialMedia: React.FunctionComponent = () => (
    <SocialMediaContainer>
        <SocialMediaButton
            href="https://www.instagram.com/innovatemeetup/"
            aria-label="instagram"
        >
            <SocialMediaIcon src={instagramIcon} />
        </SocialMediaButton>

        <SocialMediaButton
            href="https://join.slack.com/t/innovatebh/shared_invite/zt-gxocccq8-WsjgP55HUrZ1s1F_SBjDHw"
            aria-label="slack"
        >
            <SocialMediaIcon src={slackIcon} />
        </SocialMediaButton>

        <SocialMediaButton
            href="https://www.facebook.com/innovate.meetup"
            aria-label="facebook"
        >
            <SocialMediaIcon src={facebookIcon} />
        </SocialMediaButton>
    </SocialMediaContainer>
)

export default SocialMedia
