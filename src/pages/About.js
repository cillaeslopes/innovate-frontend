import React, { Component } from 'react';
import Header from '../components/Shared/Header';
import AboutArea from '../components/PageAbout/AboutArea';
import TeamArea from '../components/PageAbout/TeamArea';

class About extends Component {
    render() {
        return (
            <div id='page-about'>
                <Header />
                <div id='content'>
                    <AboutArea />
                    <TeamArea />
                </div>
                <div id='unicorn'></div>
            </div>
        )
    }
}

export default About;