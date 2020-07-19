import React, { useState } from 'react'
import { IconButton } from '@material-ui/core'
import Link from 'next/link'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import { MenuImage, StyledMenu, MenuLink, MenuButton } from './styled'

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
                <Link href="/" passHref>
                    <MenuLink>Home</MenuLink>
                </Link>
                <Link href="/sobre" passHref>
                    <MenuLink>Sobre</MenuLink>
                </Link>
                <Link href="/links" passHref>
                    <MenuLink>Links</MenuLink>
                </Link>
            </StyledMenu>
        </>
    )
}

export default Menu
