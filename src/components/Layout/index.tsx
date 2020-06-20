import React from 'react'
import { GlobalStyle } from './styled'

const Layout: React.FunctionComponent = ({ children }) => (
    <>
        <GlobalStyle />
        {children}
    </>
)

export default Layout
