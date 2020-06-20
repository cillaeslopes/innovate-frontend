import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItem, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

class SideMenu extends Component {
    
    render() {
        let hiddenClass = this.props.isToggleOn ? 'show' : 'hide';
        return (
            <div>
                <div className={`${hiddenClass}`} id='side-menu'>
                    <IconButton onClick={this.props.toggleMenu} id='btn-close-menu'>
                        <CloseIcon/> Fechar
                    </IconButton>

                    <MenuItem>
                        <NavLink to='/' className='menu-link'>Home</NavLink>
                    </MenuItem>

                    <MenuItem>
                        <NavLink to='/about' className='menu-link'>Sobre</NavLink>
                    </MenuItem>
                </div>
                <div className={`backdrop ${hiddenClass}`} onClick={this.props.toggleMenu}></div>
            </div>
        )
    }
} export default SideMenu