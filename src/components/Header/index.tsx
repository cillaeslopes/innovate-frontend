import React from 'react'
import Menu from '../Menu'
import { Header, NavBar, Title, UnicornImage } from './styled'

const StyledHeader: React.FunctionComponent = () => (
    <Header>
        <NavBar>
            <UnicornImage />
            <Title>Innovate</Title>
            <Menu />
        </NavBar>
    </Header>
)

export default StyledHeader
