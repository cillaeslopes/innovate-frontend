import styled from 'styled-components'
import { Typography, IconButton } from '@material-ui/core'
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

export const TeamStyled = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    background-color: ${textBackgroundColor};
    padding-left: 56px;

    ${mobileWidth} {
        width: 100%;
        padding: 56px 0;
    }
`

export const Subtitle = styled.h2`
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 0;

    ${mobileWidth} {
        font-size: 14px;
    }
`

export const TeamWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const TeamInfoStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
`

export const Photo = styled.img`
    width: 140px;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 0 auto;
`

export const Info = styled.div`
    width: 70%;
    margin-left: 10px;
`

export const Name = styled.p`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
`

export const Minibio = styled.p`
    font-size: 12px;
    text-align: justify;
    font-weight: normal;
`

export const LinkIcon = styled(IconButton).attrs({
    target: '_blank',
    rel: 'noopener',
})`
    width: 40px;
    padding: 0;

    path {
        fill: #76079a;
    }
`

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
