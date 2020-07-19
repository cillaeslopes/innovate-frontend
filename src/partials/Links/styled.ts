import styled from 'styled-components'
import { Typography, Link } from '@material-ui/core'
import sideUnicorn from '../../assets/images/side-unicorn.png?resize&min=50&max=150&ts-asset'

const mobileWidth = '@media (max-width: 767px)'

export const MainStyled = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 20px;

    ${mobileWidth} {
        flex-direction: column;
    }
`

export const Unicorn = styled.img.attrs({
    src: sideUnicorn,
    srcSet: sideUnicorn.srcSet,
    alt: 'Unicórnio fofinho minúsculo escondido',
})`
    height: 5vh;
    position: fixed;
    top: 9vh;
    right: 10vw;
    transform: rotate(90deg);
`

export const Section = styled.div`
    font-family: 'Montserrat';
`

export const SectionTitle = styled(Typography)`
    font-family: 'Montserrat';
    text-transform: uppercase;
    font-weight: bold;
`

export const SectionText = styled(Typography).attrs({
    paragraph: true,
})`
    font-family: 'Montserrat';
    text-align: justify;
    padding: 10px 0;
`

export const LinkArea = styled.div`
    display: flex;
`

export const SectionLink = styled(Link).attrs({
    target: '_blank',
    rel: 'noopener',
})`
    color: #212121;
    text-decoration: underline;
    text-decoration-color: #03acff;
`

export const SectionDivisor = styled.div`
    height: 1px;
    background-image: linear-gradient(
        to right,
        #fc27a7 0%,
        #2cbefc 25%,
        #adef30 50%,
        #e527fc 75%,
        #ffde59 100%
    );
    width: 100%;
    margin: 40px 100px;

    ${mobileWidth} {
        margin: 40px 0;
    }
`
