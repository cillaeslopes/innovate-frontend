import React from 'react'
import Head from 'next/head'
import { Container, FixedMenu } from '../partials/Home/styled'
import Main from '../partials/Home/Main'
import Footer from '../partials/Home/Footer'
import { GlobalStyle } from '../components/Layout/styled'
import Menu from '../partials/Home/Menu'

const Home: React.FunctionComponent = () => (
    <>
        <GlobalStyle />
        <Head>
            <title>Innovate</title>
            <meta
                name="description"
                content="Plataforma da Innovate, a Comunidade de TI mais legal de BH"
            />
        </Head>
        <Container>
            <Main />
            <Footer />
        </Container>
        <Menu />
    </>
)

export default Home
