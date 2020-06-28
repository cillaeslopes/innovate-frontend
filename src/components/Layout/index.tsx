import React from 'react'
import Head from 'next/head'
import { GlobalStyle, Container, Title, Main } from './styled'
import StyledHeader from '../Header'

export interface Props {
    pageTitle: string
    pageDescription: string
    title: string
}

const Layout: React.FunctionComponent<Props> = ({
    pageTitle,
    pageDescription,
    title,
    children,
}) => (
    <>
        <GlobalStyle />
        <Head>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
        </Head>
        <Container>
            <StyledHeader />
            <Main>
                <Title>{title}</Title>
                {children}
            </Main>
        </Container>
    </>
)

export default Layout
