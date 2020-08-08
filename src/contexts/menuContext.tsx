import React, { useState } from 'react'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

export const MenuContext = React.createContext()

export const MenuContextProvider = ({ children }) => {
  const theme = useTheme()
  const persistentMenu = useMediaQuery(theme.breakpoints.up('sm'))
  const [isOpen, setIsOpen] = useState(persistentMenu)
console.log('persistentMenu', persistentMenu, isOpen)
    return (
        <MenuContext.Provider value={{ isOpen, setIsOpen, persistentMenu }}>
            {children}
        </MenuContext.Provider>
    )
}
