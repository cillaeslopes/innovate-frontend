import React from 'react'
import Layout from '../components/Layout'
import Main from '../partials/FaleConosco/Main'

const pageTitle = 'Innovate: Fale Conosco'
const pageDescription = 'Fale com o Innovate ou contribua com o nosso projeto'
const title = 'Fale Conosco'

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
