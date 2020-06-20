import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Replay from '@material-ui/icons/Replay'

class NotFound extends Component {
    render () {
        return (
            <div id='page-not-found'>
                <div id='not-found-unicorn'></div>
                <div id='not-found-messages'>
                    <h1>Oops...</h1>
                    <p>Parece que você está tentando acessar uma página que não existe</p>
                    <p>Vamos tentar de novo</p>
                    <NavLink to='/'>
                        <Button variant="contained" 
                            startIcon={<Replay/>}
                            className='btn-go-back'>
                            Voltar à Home
                        </Button>
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default NotFound