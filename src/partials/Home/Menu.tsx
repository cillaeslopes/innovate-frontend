import React from 'react'
import { createStyles, makeStyles, Drawer } from '@material-ui/core'
import Items from '../../components/Menu/Items'

const useStyles = makeStyles(() =>
    createStyles({
        drawer: {
            width: 240,
            flexShrink: 0,
        },
        drawerPaper: {
            width: 240,
        },
    })
)

const Menu: React.FunctionComponent = () => {
    const classes = useStyles()
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{ paper: classes.drawerPaper }}
            anchor="right"
        >
            <Items />
        </Drawer>
    )
}

export default Menu
