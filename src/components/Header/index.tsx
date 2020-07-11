import React from 'react'
import Menu from '../Menu'
import { Header, NavBar, Title, UnicornImage, HomeLink } from './styled'

const StyledHeader: React.FunctionComponent = () => (
    <Header>
        <NavBar>
            <HomeLink href="/">
                <UnicornImage />
                <Title>Innovate</Title>
            </HomeLink>
            <Menu />
        </NavBar>
    </Header>
)

export default StyledHeader
