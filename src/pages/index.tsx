import React from 'react'
import MenuButton from '../components/MenuButton'
import { Container, Header, Main, Footer } from '../partials/Home/styled'

type Props = {
    name: string
}

const Home: React.FunctionComponent<Props> = ({ name }) => (
    <Container>
        <Header>
            <MenuButton></MenuButton>
        </Header>
        <Main></Main>
        <Footer></Footer>
    </Container>
)
export default Home
