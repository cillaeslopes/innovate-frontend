import React from 'react'
import { MainStyled, LeftContainer, RightContainer } from './styled'
import Form from './Form'
import ProjectInfo from './ProjectInfo'
import SocialMedia from './SocialMedia'

const Main: React.FunctionComponent = () => (
    <MainStyled>
        <LeftContainer>
            <Form />
        </LeftContainer>
        <RightContainer>
            <SocialMedia />
            <ProjectInfo />
        </RightContainer>
    </MainStyled>
)

export default Main
