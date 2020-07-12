import styled from 'styled-components'
import { SwipeableDrawer, Button, Link } from '@material-ui/core'
import menuImageSrc from '../../assets/images/menu.png'

export const MenuImage = styled.img.attrs({
    src: menuImageSrc,
})`
    width: 50px;
`

export const StyledMenu = styled(SwipeableDrawer).attrs({
    anchor: 'right',
    classes: {
        paperAnchorRight: 'root',
    },
})`
    .root {
        background-color: #ffde59;
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
