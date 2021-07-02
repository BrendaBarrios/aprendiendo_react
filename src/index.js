import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import BadgeNew from './pages/BadgeNew';
import ReactDOM from 'react-dom';
import './global.css';

// Porps(properties) : Son argummentos a una función
const container = document.getElementById('app');
// Desde aqui se instancian los parametros que pasaran

ReactDOM.render(
    <BadgeNew/>,
    container)
