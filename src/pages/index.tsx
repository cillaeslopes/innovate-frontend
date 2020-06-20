import React from 'react'
import Head from 'next/head'
import MenuButton from '../components/MenuButton'
import { Container, Header, Footer } from '../partials/Home/styled'
import Main from '../partials/Home/Main'
import Layout from '../components/Layout'

const Home: React.FunctionComponent = () => (
    <Layout>
        <Head>
            <title>Innovate</title>
        </Head>
        <Container>
            <Header>
                <MenuButton />
            </Header>
            <Main />
            <Footer />
        </Container>
    </Layout>
)
export default Home
