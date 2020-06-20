import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import MenuButton from './MenuButton'
import SideMenu from './SideMenu'

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { showMenu: false };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(e) {
        this.setState({
            showMenu: !this.state.showMenu
        });
    }

    render() {
        return (
            <AppBar position='static' id='navbar'>
                <Toolbar id='toolbar'>
                    <img src={require('../../assets/images/unicorn.png')} alt='Innovate logo'></img>
                    <Typography id='app-name'>{process.env.REACT_APP_BRAND_TITLE}</Typography>
                    <div className='menu-area'>
                        <MenuButton toggleMenu={this.toggleMenu} />
                        <SideMenu isToggleOn={this.state.showMenu}
                            toggleMenu={this.toggleMenu} />
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;