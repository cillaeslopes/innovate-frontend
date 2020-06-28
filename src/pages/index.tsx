import React from 'react'
import Head from 'next/head'
import Menu from '../components/Menu'
import { Container, Header } from '../partials/Home/styled'
import Main from '../partials/Home/Main'
import Footer from '../partials/Home/Footer'
import Layout from '../components/Layout'

const Home: React.FunctionComponent = () => (
    <Layout>
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
    </Layout>
)

export default Home
