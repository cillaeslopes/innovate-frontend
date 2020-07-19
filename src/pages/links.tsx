import React from 'react'
import Layout from '../components/Layout'
import Main from '../partials/Links/Main'

const pageTitle = 'Innovate: Links'
const pageDescription =
    'Links úteis Innovate: trello, agenda, instagram, lives e mais'
const title = 'Links'

const Links: React.FunctionComponent = () => (
    <Layout
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        title={title}
    >
        <Main />
    </Layout>
)

export default Links
