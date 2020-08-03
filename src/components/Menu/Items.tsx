import React from 'react'
import Link from 'next/link'
import { MenuLink } from './styled'

const Items: React.FunctionComponent = () => (
    <>
        <Link href="/" passHref>
            <MenuLink>Home</MenuLink>
        </Link>
        <Link href="/sobre" passHref>
            <MenuLink>Sobre</MenuLink>
        </Link>
        <Link href="/links" passHref>
            <MenuLink>Links</MenuLink>
        </Link>
    </>
)

export default Items
