import styled from 'styled-components'
import { SwipeableDrawer, Button, Link } from '@material-ui/core'
import menuImageSrc from '../../assets/images/menu.png?resize&min=50&max=150&ts-asset'
import { pallete } from '../Layout/theme'

const menuImageWidth = '50px'

export const MenuImage = styled.img.attrs({
    src: menuImageSrc,
    srcSet: menuImageSrc.srcSet,
    sizes: menuImageWidth,
})`
    width: ${menuImageWidth};
`

export const StyledMenu = styled(SwipeableDrawer).attrs({
    anchor: 'right',
    classes: {
        paperAnchorRight: 'root',
    },
})`
    .root {
        background-color: ${pallete.yellow};
        width: 300px;
    }
`

export const MenuButton = styled(Button)`
    display: flex;
    justify-content: flex-start;
    padding-left: 16px;
`

export const MenuLink = styled(MenuButton).attrs({
    component: Link,
})`
    font-size: 24px;
    :hover {
        text-decoration: none;
    }
`

export const BottomLink = styled(Button)`
    display: flex;
    justify-content: flex-start;
    padding-left: 16px;
    bottom: 0;
    position: fixed;
    font-size: 20px;
    text-transform: none;
`
