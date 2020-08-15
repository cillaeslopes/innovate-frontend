import React from 'react'
import { MainStyled, LeftContainer, RightContainer } from './styled'
import Form from './Form'

const Main: React.FunctionComponent = () => (
    <MainStyled>
        <LeftContainer>
            <Form />
        </LeftContainer>
        <RightContainer />
    </MainStyled>
)

export default Main
