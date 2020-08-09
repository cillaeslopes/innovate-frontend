import styled from 'styled-components'
import { Typography, Link } from '@material-ui/core'
import sideUnicorn from '../../assets/images/side-unicorn.png?resize&min=50&max=150&ts-asset'
import { InnovateTheme } from '../../components/Layout/InnovateTheme'

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
    font-family: ${InnovateTheme.typography.title.font};
    font-weight: ${InnovateTheme.typography.title.weight};
`

export const SectionTitle = styled(Typography)`
    font-family: ${InnovateTheme.typography.title.font};
    font-weight: ${InnovateTheme.typography.title.weight};
    text-transform: uppercase;
`

export const SectionText = styled(Typography).attrs({
    paragraph: true,
})`
    font-family: ${InnovateTheme.typography.text.font};
    font-weight: ${InnovateTheme.typography.text.weight};
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
    color: ${InnovateTheme.pallete.black};
    text-decoration: underline;
    text-decoration-color: ${InnovateTheme.pallete.blue};
`

export const SectionDivisor = styled.div`
    height: 1px;
    background-image: linear-gradient(
        to right,
        ${InnovateTheme.pallete.purple} 0%,
        ${InnovateTheme.pallete.yellow} 25%,
        ${InnovateTheme.pallete.blue} 50%,
        ${InnovateTheme.pallete.pink} 75%,
        ${InnovateTheme.pallete.green} 100%
    );
    width: 100%;
    margin: 40px 100px;

    ${mobileWidth} {
        margin: 40px 0;
    }
`
