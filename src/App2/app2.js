import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Cabecera from './Cabecera/Cabecera';
import {v4} from 'uuid'
import DetallePersona from './DetallePersona/DetallePersona'
function App(){

  const [persona,actPersona] = useState({
    nombre:'',
    edad:'',
    carrera:'',
    id:v4() //al momento de crear la estructura se le asigna el id
  })
  const [hayError,actError] = useState(false)

  const [personas,insertarPersona] = useState([]);
  
  const actualizar= e =>{
    actPersona({
      ...persona,
      [e.target.name]:e.target.value,
      id:v4()
    })
  }
  const cambiaPersonas = (id) =>{
    const personaArray = personas.filter(persona => persona.id !== id);
    insertarPersona(
      personaArray
    )
  }
  const guardar = e => {
    
    e.preventDefault();
    
    if(persona.nombre.trim==='' || persona.edad==='' || persona.carrera.trim==='')
      {
      actError(true);
      return;
      }
    actError(false);

    insertarPersona([
      ...personas,
      persona
    ]);
/*    actPersona({
      ...persona,
      id: v4()
    })*/

  }
  return (
    <div>
    <form onSubmit={guardar}>
      <label htmlFor="nombre">Nombre Completo</label>
      <input type="text" id="nombre" name="nombre" onChange={actualizar}></input>
      <br />
      <label htmlFor="edad">Edad</label>
      <input type="number" id="edad" name="edad" onChange={actualizar}></input>
      <br />
      <label htmlFor="carrera">Carrera</label>
      <input type="text" id="carrera" name="carrera" onChange={actualizar}></input>
      <br />
      <button type="submit">Guardar</button>
    </form>
    <h2>
      Lista de Personas
    </h2>
      <DetallePersona 
        persona={personas}
        onNameChange={cambiaPersonas}
      />      
    </div>
  )
}

/*function App(props) {
  const [persona,actPersona]=React.useState({
    edad:0,
    nombre:'',    
  })
//  const [edad,setEdad]=React.useState(30)
//  const [nombre,setNombre]=React.useState(props.nombre);
  let mensaje='';
/*  const cambiarEdad = (edad,nombre) => {
    setEdad(edad)
    setNombre(nombre)} 
  const cambiaValor = e =>{
    //alert(e.target.name)
    actPersona({
      ...persona,
      [e.target.name]:e.target.value
    })
    console.log(serialize(formulario))
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

  const ejecuta = e =>{
    console.log(serialize(formulario))
  }

  const formulario=(
    <form>
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
      <button type="button" onClick={ejecuta} id="boton" >
        Guardar
      </button>
    </header>
    </form>
  )
  return (
    <div className="App">
      <Cabecera 
        nombre={persona.nombre}
        edad={persona.edad}
      />
      { formulario }
    </div>
  );
}*/

export default App;
