import React from 'react'
import Head from 'next/head'
import { Container } from '@material-ui/core'
import Layout from '../components/Layout'
import StyledHeader from '../components/Header'

const About: React.FunctionComponent = () => (
    <Layout>
        <Head>
            <title>Innovate: Sobre</title>
            <meta name="description" content="Pagina maravilhosa do Innovate" />
        </Head>
        <Container>
            <StyledHeader />
        </Container>
    </Layout>
)

export default About
