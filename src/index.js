//const element = document.createElement('h1')
//element.innerText = "Hello Brenda"

//const container = document.getElementById('app')
//container.appendChild(element)



import React from 'react';
import ReactDOM from 'react-dom';

// const jsx = <h1>Hello React</h1>
// const element = React.createElement('a',{href:'https://platzi.com'},'Ir a platzi')
// const container = document.getElementById('app')

const name = 'Brenda'
const element = React.createElement('h1',{},`Hola soy ${name}`)
const container = document.getElementById('app')
ReactDOM.render(element,container)


// ELemento con jsx
const suma =() => 3+3;
const jsx = <h1>Soy otro elemento con jsx {suma()}</h1> 
ReactDOM.render(jsx,container)

//ReactDOM.render(__que__,__donde__)


// Si usamos jsx en todos los archivos debemos importar react