import React from 'react'
import { StylesProvider } from '@material-ui/core/styles'

type Props = {
    Component: React.FunctionComponent
    pageProps: Record<string, unknown>
}

const MyApp: React.FunctionComponent<Props> = ({ Component, pageProps }) => {
    return (
        <StylesProvider injectFirst>
            <Component {...pageProps} />
        </StylesProvider>
    )
}

export default MyApp
