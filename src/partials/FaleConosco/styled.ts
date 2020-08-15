import styled from 'styled-components'
import { FormControl, TextField, Button } from '@material-ui/core'
import { pallete, typography } from '../../components/Layout/theme'

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
`

export const FormContainer = styled(FormControl)`
    width: 100%;
`

export const Field = styled(TextField).attrs({
    fullWidth: true,
})`
    font-family: ${typography.text};
`

export const SendButton = styled(Button)`
    background-color: ${pallete.blue};
    margin-top: 10px;
`

export const RightContainer = styled.div`
    width: 40%;
`
