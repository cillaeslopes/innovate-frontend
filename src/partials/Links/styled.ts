import styled from 'styled-components'
import { Typography, Link } from '@material-ui/core'
import sideUnicorn from '../../assets/images/side-unicorn.png?resize&min=50&max=150&ts-asset'
import { pallete, typography } from '../../components/Layout/theme'

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
    font-family: ${typography.title.font};
    font-weight: ${typography.title.weight};
`

export const SectionTitle = styled(Typography)`
    font-family: ${typography.title.font};
    font-weight: ${typography.title.weight};
    text-transform: uppercase;
`

export const SectionText = styled(Typography).attrs({
    paragraph: true,
})`
    font-family: ${typography.text.font};
    font-weight: ${typography.text.weight};
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
    color: ${pallete.black};
    text-decoration: underline;
    text-decoration-color: ${pallete.blue};
`

export const SectionDivisor = styled.div`
    height: 1px;
    background-image: linear-gradient(
        to right,
        ${pallete.purple} 0%,
        ${pallete.yellow} 25%,
        ${pallete.blue} 50%,
        ${pallete.pink} 75%,
        ${pallete.green} 100%
    );
    width: 100%;
    margin: 40px 100px;

    ${mobileWidth} {
        margin: 40px 0;
    }
`
