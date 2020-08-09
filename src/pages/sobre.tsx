import React from 'react'
import Layout from '../components/Layout'
import Main from '../partials/Sobre/Main'

const pageTitle = 'Innovate: Sobre'
const pageDescription =
    'Um pouco mais sobre a Innovate, a Comunidade de TI mais legal de BH'
const title = 'Quem somos nós na fila do pão'

const Page: React.FunctionComponent = () => (
    <Layout
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        title={title}
    >
        <Main />
    </Layout>
)

export default Page
