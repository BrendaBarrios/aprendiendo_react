//const element = document.createElement('h1')
//element.innerText = "Hello Brenda"

//const container = document.getElementById('app')
//container.appendChild(element)



import React from 'react';
import ReactDOM from 'react-dom';


// ELemento con jsx el codigo queda claro y es más expresivo
const jsx = ( <div>
    <h1>Hola</h1> 
    <p>Soy ingeniera de software</p>
</div>);
const container = document.getElementById('app')
//ReactDOM.render(jsx,container)

// Con createElement se vuelve más largo el codigo.
const element = React.createElement(
    'div',
    {},
    React.createElement('h1',{},'Soy Brenda'), // Creación de un children
    React.createElement('p',{},'Soy ingeniero de sotware')
);
ReactDOM.render(element,container)
