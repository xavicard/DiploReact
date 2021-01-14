import logo from './logo.svg';
import './App.css';
import React from 'react';
import Cabecera from './Cabecera/Cabecera';

function App(props) {
  const [edad,setEdad]=React.useState(30)
  const [nombre,setNombre]=React.useState(props.nombre);
  let mensaje;
  const cambiarEdad = (edad,nombre) => {
    setEdad(edad)
    setNombre(nombre)} 
  if(edad>=18){
    mensaje=<h1>Es mayor de edad</h1>
  }
  else
    mensaje=<h1>Es menor de edad</h1>
  return (
    <div className="App">
      <Cabecera 
        nombre={nombre}
        edad={edad}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {mensaje} {nombre}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" id="boton" onClick={ () => cambiarEdad('17','Juan Perez') }>
          Inicio
        </button>
      </header>
    </div>
  );
}

export default App;
