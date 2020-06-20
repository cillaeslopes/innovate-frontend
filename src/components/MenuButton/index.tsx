import React from 'react'
import { IconButton } from '@material-ui/core'
import { MenuImage } from './styled'

const MenuButton: React.FunctionComponent = () => (
    <IconButton aria-label="Menu">
        <MenuImage alt="" />
    </IconButton>
)

export default MenuButton
