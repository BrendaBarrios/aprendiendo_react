//const element = document.createElement('h1')
//element.innerText = "Hello Brenda"

//const container = document.getElementById('app')
//container.appendChild(element)



import React from 'react';
import ReactDom from 'react-dom';

const element = <h1>Hello, Brenda </h1>
const container = document.getElementById('app')

//ReactDOM.render(__que__,__donde__)
ReactDOM.render(element,container)

// Si usamos jsx en todos los archivos debemos importar react