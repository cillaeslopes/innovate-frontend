import React, { useState } from 'react'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

export const MenuContext = React.createContext({
    isOpen: false,
    setIsOpen: null,
    persistentMenu: false,
})

export const MenuContextProvider: React.FunctionComponent = ({ children }) => {
    const theme = useTheme()
    const persistentMenu = useMediaQuery(theme.breakpoints.up('sm'))
    const [isOpen, setIsOpen] = useState(persistentMenu)
    return (
        <MenuContext.Provider value={{ isOpen, setIsOpen, persistentMenu }}>
            {children}
        </MenuContext.Provider>
    )
}
