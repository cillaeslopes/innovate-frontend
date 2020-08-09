import React, { useEffect } from 'react'
import { StylesProvider } from '@material-ui/core/styles'

type Props = {
    Component: React.FunctionComponent
    pageProps: Record<string, unknown>
}

const MyApp: React.FunctionComponent<Props> = ({ Component, pageProps }) => {
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side')

        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles)
        }
    }, [])

    return (
        <StylesProvider injectFirst>
            <Component {...pageProps} />
        </StylesProvider>
    )
}

export default MyApp
