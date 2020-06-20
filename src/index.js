import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import * as serviceWorker from './serviceWorker';
import Routes from './Routes'

ReactDOM.render(
    <Routes/>,
    document.getElementById('root')
);
    
serviceWorker.unregister();    