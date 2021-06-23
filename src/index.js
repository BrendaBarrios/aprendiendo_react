import React from 'react';
import Badge from './components/Badge';
import ReactDOM from 'react-dom';
import './global.css';

// Porps(properties) : Son argummentos a una función
const container = document.getElementById('app');
// Desde aqui se instancian los parametros que pasaran
ReactDOM.render(
    <Badge
        firstName={'Brenda'}
        lastName={'Barrios'}
        avatarUrl={"https://s.gravatar.com/avatar/0177d8aafbd9e489e43289170fd51211?s=80"}
        jobTitle={'Ingeniera de Sofware'}
        twitter={'yas_brenda'}/>,
    container)
