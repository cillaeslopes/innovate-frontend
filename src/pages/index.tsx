import React from 'react'
import Head from 'next/head'
import Menu from '../components/Menu'
import { Container, Header } from '../partials/Home/styled'
import Main from '../partials/Home/Main'
import Footer from '../partials/Home/Footer'
import { GlobalStyle } from '../components/Layout/styled'

const Home: React.FunctionComponent = () => (
    <>
        <GlobalStyle />
        <Head>
            <title>Innovate</title>
            <meta name="description" content="Pagina maravilhosa do Innovate" />
        </Head>
        <Container>
            <Header>
                <Menu />
            </Header>
            <Main />
            <Footer />
        </Container>
    </>
)

export default Home
