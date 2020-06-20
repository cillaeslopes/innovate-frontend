import React from 'react'
import MenuButton from '../components/MenuButton'
import { Container, Header, Footer } from '../partials/Home/styled'
import Main from '../partials/Home/Main'
import Layout from '../components/Layout'

type Props = {
    name: string
}

const Home: React.FunctionComponent<Props> = ({ name }) => (
    <Layout>
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
