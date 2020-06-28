import styled from 'styled-components'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import unicorn from '../../assets/images/unicorn.png'

export const Header = styled(AppBar).attrs({
    color: '#fafafa',
})`
    height: 10vh;
    border: 2px solid transparent;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-image: linear-gradient(
        to right,
        #fc27a7 0%,
        #2cbefc 25%,
        #adef30 50%,
        #e527fc 75%,
        #ffde59 100%
    );
    border-image-slice: 1;
`

export const NavBar = styled(Toolbar)`
    height: 100%;
`

export const Title = styled(Typography)`
    font-family: 'Crop Types';
    text-transform: uppercase;
    font-size: 24px;
    flex-grow: 1;
    align-self: flex-end;
    padding-bottom: 10px;
`

export const UnicornImage = styled.img.attrs({
    src: unicorn,
})`
    height: 70%;
    transform: scaleX(-1);
    margin-right: 20px;
`
