import styled from 'styled-components'
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core'
import unicorn from '../../assets/images/unicorn.png'
import { pallete, typography } from '../Layout/theme'

export const Header = styled(AppBar).attrs({
    color: pallete.white,
})`
    height: 10vh;
    border: 2px solid transparent;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-image: linear-gradient(
        to right,
        ${pallete.purple} 0%,
        ${pallete.yellow} 25%,
        ${pallete.blue} 50%,
        ${pallete.pink} 75%,
        ${pallete.green} 100%
    );
    border-image-slice: 1;
`

export const NavBar = styled(Toolbar)`
    height: 100%;
`

export const HomeLink = styled(Link).attrs({
    href: '/',
})`
    height: 100%;
    display: flex;
    flex-grow: 1;
    :hover {
        text-decoration: none;
    }
`

export const UnicornImage = styled.img.attrs({
    src: unicorn,
    alt: 'Unicórnio da Innovate',
})`
    height: 70%;
    transform: scaleX(-1);
    margin-right: 20px;
    align-self: center;
`

export const Title = styled(Typography)`
    font-family: ${typography.logo.font};
    font-weight: ${typography.logo.weight};
    text-transform: uppercase;
    font-size: 24px;
    align-self: flex-end;
    padding-bottom: 10px;
`
