import React from 'react'
import { StylesProvider } from '@material-ui/core/styles'
import {MenuContextProvider} from '../contexts/menuContext'

type Props = {
    Component: React.FunctionComponent
    pageProps: Record<string, unknown>
}

const MyApp: React.FunctionComponent<Props> = ({ Component, pageProps }) => {
    return (
        <StylesProvider injectFirst>
            <MenuContextProvider>
                <Component {...pageProps} />
            </MenuContextProvider>
        </StylesProvider>
    )
}

export default MyApp
