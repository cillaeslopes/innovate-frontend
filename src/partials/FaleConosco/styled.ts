import styled from 'styled-components'
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

export const FormContainer = styled.div`
    background-color: ${pallete.blue};
`
