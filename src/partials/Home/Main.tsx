import React from 'react'
import { MainStyled, UnicornImage, TitleContainer, Title } from './styled'

const Main: React.FunctionComponent = () => (
    <MainStyled>
        <UnicornImage alt="Unicórnio da Innovate de ladinho" />
        <TitleContainer>
            <Title>Innovate</Title>
        </TitleContainer>
    </MainStyled>
)

export default Main
