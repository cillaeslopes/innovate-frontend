import React, { useState } from 'react'
import { IconButton } from '@material-ui/core'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined'
import { MenuImage, StyledMenu, MenuButton, BottomLink } from './styled'
import Items from './Items'

const Menu: React.FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(prevIsOpen => !prevIsOpen)
    }

    return (
        <>
            <IconButton aria-label="Abrir menu" onClick={toggleMenu}>
                <MenuImage alt="" />
            </IconButton>
            <StyledMenu open={isOpen} onOpen={toggleMenu} onClose={toggleMenu}>
                <MenuButton
                    aria-label="Fechar menu"
                    startIcon={<CloseRoundedIcon />}
                    onClick={toggleMenu}
                >
                    Fechar
                </MenuButton>
                <Items />
                <BottomLink
                    aria-label="Fale Conosco"
                    startIcon={<SmsOutlinedIcon />}
                    href="/fale-conosco"
                >
                    Fala aê
                </BottomLink>
            </StyledMenu>
        </>
    )
}

export default Menu
