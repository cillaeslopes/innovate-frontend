import React from 'react'
import { MainStyled, UnicornImage } from './styled'
import About from './About'
import Team from './Team'

const Main: React.FunctionComponent = () => (
    <MainStyled>
        <About />
        <Team />
        <UnicornImage />
    </MainStyled>
)

export default Main
