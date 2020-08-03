import { Typography, Link, Button } from '@material-ui/core'
import styled from 'styled-components'
import sideUnicorn from '../../assets/images/side-unicorn.png?resize&min=500&max=1500&ts-asset'
import rings from '../../assets/images/rings.png'

const headerHeight = '10vh'
const mobileWidth = '@media (max-width: 768px)'

export const HomeLayout = styled

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const Header = styled.header`
    display: flex;
    justify-content: flex-end;
    height: ${headerHeight};
`

export const MainStyled = styled.main`
    flex: 1;
    display: flex;
    align-items: flex-end;

    ${mobileWidth} {
        flex-direction: column;
        align-items: flex-start;
    }
`

export const UnicornImage = styled.img.attrs({
    src: sideUnicorn,
    srcSet: sideUnicorn.srcSet,
})`
    height: calc(100vh - ${headerHeight});

    ${mobileWidth} {
        height: 40vh;
    }
`

export const TitleContainer = styled.div`
    padding-bottom: ${headerHeight};
    background-image: url(${rings});
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: contain;
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;

    ${mobileWidth} {
        width: 100%;
        background-size: 50%;
        align-items: flex-start;
        justify-content: center;
    }
`

export const Title = styled(Typography).attrs({
    variant: 'h1',
})`
    font-family: 'Crop Types';
    text-transform: uppercase;
    font-size: 10vw;
    font-weight: 200;

    ${mobileWidth} {
        font-size: 15vw;
    }
`

export const FooterStyled = styled.footer`
    position: fixed;
    bottom: 2vh;
    height: 5vh;
    width: 100%;
    display: flex;
    justify-content: flex-start;

    @media (max-width: 960px) {
        flex-direction: column;
        height: auto;
        justify-content: center;
        align-items: center;
    }
`

export const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 0 40px;

    @media (max-width: 960px) {
        width: 300px;
        flex-direction: column;
        align-items: flex-start;
    }

    ${mobileWidth} {
        flex-direction: column;
        align-items: flex-start;
        padding: 0;
    }
`

export const Contact = styled(Button).attrs({
    component: Link,
    target: '_blank',
    rel: 'noopener',
})`
    display: flex;
    align-items: center;
    margin: 0 2vw 8px 2vw;
    text-decoration: none;
    color: #212121;
    text-transform: none;

    :hover {
        text-decoration: none;
    }
`

const contactIconSize = '25px'

export const ContactIcon = styled.img.attrs({
    alt: '',
    sizes: contactIconSize,
})`
    width: ${contactIconSize};
    height: ${contactIconSize};
    margin-right: 5px;
`
