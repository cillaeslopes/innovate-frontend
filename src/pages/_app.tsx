import React, { useEffect } from 'react'
import { StylesProvider } from '@material-ui/core/styles'
import mediaQuery from 'css-mediaquery'
import {
    StylesProvider,
    ThemeProvider,
    createMuiTheme,
} from '@material-ui/core/styles'
import { MenuContextProvider } from '../contexts/menuContext'

type Props = {
    Component: React.FunctionComponent
    pageProps: Record<string, unknown>
    deviceType: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MyApp: any = ({ Component, pageProps, deviceType }) => {
    const ssrMatchMedia = query => ({
        matches: mediaQuery.match(query, {
            width: deviceType === 'mobile' ? '0px' : '1024px',
        }),
    })

    const theme = createMuiTheme({
        props: {
            MuiUseMediaQuery: { ssrMatchMedia },
        },
    })

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side')

        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles)
        }
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <StylesProvider injectFirst>
                <MenuContextProvider>
                    <Component {...pageProps} />
                </MenuContextProvider>
            </StylesProvider>
        </ThemeProvider>
    )
}

MyApp.getInitialProps = ({ ctx }) => {
    return {
        deviceType: ctx.req.device.type,
    }
}

export default MyApp
