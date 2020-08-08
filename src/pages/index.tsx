import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import Head from 'next/head'
import Menu from '../components/Menu'
import { Container, Header } from '../partials/Home/styled'
import Main from '../partials/Home/Main'
import Footer from '../partials/Home/Footer'
import { GlobalStyle } from '../components/Layout/styled'
import { MenuContext } from '../contexts/menuContext'

const StyledContainer = styled(Container)`
    ${props => {
        if (props.menuIsOpen && props.persistentMenu) {
            return css`
                width: calc(100% - 300px);
            `
        }
        return 'width: 100%'
    }}
`

const Home: React.FunctionComponent = () => {
    const { isOpen, persistentMenu } = useContext(MenuContext)

    return (
        <>
            <GlobalStyle />
            <Head>
                <title>Innovate</title>
                <meta
                    name="description"
                    content="Plataforma da Innovate, a Comunidade de TI mais legal de BH"
                />
            </Head>
            <StyledContainer menuIsOpen={isOpen} persistentMenu={persistentMenu}>
                <Header>
                    <Menu />
                </Header>
                <Main />
                <Footer />
            </StyledContainer>
        </>
    )
}

export default Home
