import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import StyledHeader from '../components/Header'
import Main from '../partials/Sobre/Main'
import { Container } from '../partials/Sobre/styled'
import PageTitle from '../components/PageTitle'

const title = 'Quem somos nós na fila do pão'

const About: React.FunctionComponent = () => (
    <Layout>
        <Head>
            <title>Innovate: Sobre</title>
            <meta name="description" content="Pagina maravilhosa do Innovate" />
        </Head>
        <Container>
            <StyledHeader />
            <PageTitle title={title} />
            <Main />
        </Container>
    </Layout>
)

export default About
