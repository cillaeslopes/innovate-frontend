import styled from 'styled-components'
import { Typography } from '@material-ui/core'
import sideUnicorn from '../../assets/images/side-unicorn.png'

const mobileWidth = '@media (max-width: 767px)'
const textBackgroundColor = '#ffffffbf'

export const MainStyled = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    ${mobileWidth} {
        flex-direction: column;
    }
`

export const AboutStyled = styled(Typography).attrs({
    paragraph: true,
})`
    width: 50%;
    font-size: 14px;
    font-weight: 300;
    text-align: justify;
    font-family: 'Montserrat';
    background-color: ${textBackgroundColor};

    ${mobileWidth} {
        width: 100%;
        font-size: 12px;
    }
`

export const TeamStyled = styled.div``

export const UnicornImage = styled.img.attrs({
    src: sideUnicorn,
    alt: 'Unicórnio de ladinho',
})`
    position: fixed;
    bottom: 0;
    right: 0;
    height: 30vh;
    transform: scaleX(-1);
    z-index: -1;
`
