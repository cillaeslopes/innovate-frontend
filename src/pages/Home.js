import React, { Component } from 'react';
import MenuButton from '../components/Shared/MenuButton'
import SideMenu from '../components/Shared/SideMenu'
import ContactFooter from '../components/PageHome/ContactFooter';

class Home extends Component {

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
            <div id='home-page'>
                <MenuButton toggleMenu={this.toggleMenu} />
                <SideMenu isToggleOn={this.state.showMenu}
                    toggleMenu={this.toggleMenu} />
                <div id='brand'>
                    <div className='brand-image' id='unicorn'></div>
                    <div className='brand-title'>
                        <h1>{process.env.REACT_APP_BRAND_TITLE}</h1>
                    </div>
                    <div className='brand-image' id='rings'></div>
                </div>
                <ContactFooter />
            </div>
        )
    }
}

export default Home