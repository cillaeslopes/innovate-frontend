import styled from 'styled-components'
import { FormControl, TextField, Button, Link } from '@material-ui/core'
import { pallete } from '../../components/Layout/theme'

const mobileWidth = '@media (max-width: 767px)'

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

export const LeftContainer = styled.div`
    width: 50%;
    display: flex;

    ${mobileWidth} {
        width: 100%;
    }
`

export const FormContainer = styled(FormControl)`
    width: 100%;
    background-color: ${pallete.gray};
    padding: 10px 20px;
`

export const Field = styled(TextField).attrs({
    fullWidth: true,
})`
    margin-bottom: 10px;
    font-size: 12px;
`

export const SendButton = styled(Button)`
    background-color: ${pallete.blue};
    margin-top: 10px;
`

export const RightContainer = styled.div`
    width: 40%;

    ${mobileWidth} {
        width: 100%;
        margin-top: 30px;
    }
`

export const SocialMediaContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
`

export const SocialMediaButton = styled(Button).attrs({
    component: Link,
    target: '_blank',
    rel: 'noopener',
})``

export const SocialMediaIcon = styled.img.attrs({
    alt: '',
    sizes: '25px',
})`
    width: 25px;
    height: 25px;
`

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const ProjectLink = styled(Button).attrs({
    component: Link,
    target: '_blank',
    rel: 'noopener',
})`
    padding: 0;
    font-weight: bold;
    background-color: ${pallete.gray};
`

export const Text = styled.p`
    text-align: justify;
    font-size: 14px;
`
