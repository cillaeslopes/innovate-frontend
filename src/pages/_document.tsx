import React from 'react'
import Document, {
    Head,
    Main,
    NextScript,
    DocumentContext,
} from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import { ServerStyleSheet } from 'styled-components'

const GA_URL = 'https://www.googletagmanager.com/gtag/js?id=UA-172464366-1'

export default class MyDocument extends Document {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    static async getInitialProps(ctx: DocumentContext) {
        const styledComponentsSheet = new ServerStyleSheet()
        const materialSheets = new ServerStyleSheets()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props =>
                        styledComponentsSheet.collectStyles(
                            materialSheets.collect(<App {...props} />)
                        ),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {materialSheets.getStyleElement()}
                        {styledComponentsSheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            styledComponentsSheet.seal()
        }
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render() {
        return (
            <html lang="pt-br" style={{ height: '100%' }}>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <script async src={GA_URL} />
                    <script
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{
                            __html: `<!-- Global site tag (gtag.js) - Google Analytics -->
                                        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-172464366-1"></script>
                                        <script>
                                        window.dataLayer = window.dataLayer || [];
                                        function gtag(){dataLayer.push(arguments);}
                                        gtag('js', new Date());
                                        gtag('config', 'UA-172464366-1');
                                        </script>`,
                        }}
                    />
                </Head>
                <body style={{ margin: 0, height: '100%' }}>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
