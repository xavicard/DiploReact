import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Cabecera from './Cabecera/Cabecera';

function App(props) {
  const [persona,actPersona]=React.useState({
    edad:0,
    nombre:'',    
  })
//  const [edad,setEdad]=React.useState(30)
//  const [nombre,setNombre]=React.useState(props.nombre);
  let mensaje='';
/*  const cambiarEdad = (edad,nombre) => {
    setEdad(edad)
    setNombre(nombre)} */
  const cambiaValor = e =>{
    //alert(e.target.name)
    actPersona({
      ...persona,
      [e.target.name]:e.target.value
    })
  }
  const [errorEnvio,activaError]= React.useState(false)

  const enviarDatos = e =>{
    e.preventDefault();
    if(persona.nombre.trim()==='' || persona.edad==0 || persona.edad<0 || persona.edad>120 )
    {
      activaError(true);
      return;
    }
    activaError(false);
    alert('Enviado Correctamente');
  }
  if(persona.edad>=18){
    mensaje=<h1>Es mayor de edad</h1>
  }
  else
    mensaje=<h1>Es menor de edad</h1>
  return (
    <div className="App">
      <Cabecera 
        nombre={persona.nombre}
        edad={persona.edad}
      />
      <form onSubmit={enviarDatos}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {mensaje} {persona.nombre} Edad: {persona.edad}
        </p>
        {errorEnvio ? <p>Los campos son obligatorios</p> : null }        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <label>Nombre</label>
        <input type="text" name="nombre" onChange={cambiaValor}>
        </input>
        <label>Edad</label>
        <input type="number" name="edad" onChange={cambiaValor}>
        </input>
        <button type="submit" id="boton"  >
          Guardar
        </button>
      </header>
      </form>
    </div>
  );
}

export default App;
