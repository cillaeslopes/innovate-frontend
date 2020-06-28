import React from 'react'
import { MainStyled } from './styled'
import About from './About'
import Team from './Team'

const Main: React.FunctionComponent = () => (
    <MainStyled>
        <About />
        <Team />
    </MainStyled>
)

export default Main
