import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MailIcon from '@material-ui/icons/Mail'
import { Photo, Name, Minibio, Info, LinkIcon, TeamInfoStyled } from './styled'

export interface Props {
    name: string
    photo: string
    minibio: string
    instagram: string
    linkedin: string
    mail: string
}

const TeamInfo: React.FunctionComponent<Props> = ({
    name,
    photo,
    minibio,
    instagram,
    linkedin,
    mail,
}) => (
    <TeamInfoStyled>
        <Photo src={photo} alt="" />
        <Info>
            <Name>{name}</Name>
            <Minibio>{minibio}</Minibio>
            <div>
                <LinkIcon href={instagram} aria-label="instagram">
                    <InstagramIcon />
                </LinkIcon>
                <LinkIcon href={linkedin} aria-label="linked">
                    <LinkedInIcon />
                </LinkIcon>
                <LinkIcon href={`mailto:${mail}`} aria-label="email">
                    <MailIcon />
                </LinkIcon>
            </div>
        </Info>
    </TeamInfoStyled>
)

export default TeamInfo
