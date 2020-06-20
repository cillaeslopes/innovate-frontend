import React, { Component } from 'react'

class MenuButton extends Component {

    render() {
        return (
            <button id='btn-menu' onClick={this.props.toggleMenu}></button>
        )
    }

} export default MenuButton