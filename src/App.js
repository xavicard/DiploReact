import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Cabecera from './Cabecera/Cabecera';
import {v4} from 'uuid'
import DetallePersona from './DetallePersona/DetallePersona'
/*import SQLite from 'react-native-sqlite-storage'
global.db=SQLite.openDatabase({
  name:'dbprueba',
  location:'default',

},
()=>{},error=>{console.log("Error "+error)})*/
function App(){
  const [persona,actPersona] = useState({
    "id": '',
    "name": "",
    "username": "",
    "email": "",
    "address": {
      "street": "",
      "suite": "",
      "city": "",
      "zipcode": "",
      "geo": {
        "lat": "",
        "lng": ""
      }
    },
    "phone": "",
    "website": "",
    "company": {
      "name": "",
      "catchPhrase": "",
      "bs": ""
    }
  })
  const [personas,actPersonas]=useState([])
  const [hayPersonas,actswitch]=useState(false)
  const recuperaDatos = () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(respuesta => respuesta.json())
        .then(res => 
            {
            res.map(r=>{
              personas.push(r)
            })
            actswitch(true)
            }
          )
    }
  const actualiza = e =>{
    actPersona({
      ...persona,
      [e.target.name]:e.target.value
    })
  }
  const eliminaPersona = id =>{
    fetch('https://jsonplaceholder.typicode.com/users/'+id,{
      method: 'DELETE',
    }).then(res=>
      console.log(res))
  }
  const guardaPersona=e=>{
    e.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(persona),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => 
    {
      localStorage.setItem('personaGuardada',JSON.stringify(json))
      console.log(localStorage.getItem('personaGuardada'))
    }
    )
  }
  return (
    <div>
      <form onSubmit={guardaPersona}>
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" id="name" onChange={actualiza}></input><br/>
        <label htmlFor="email">Correo Electronico</label>
        <input type="text" name="email" id="email" onChange={actualiza}></input><br/>
        <button type="submit">Guardar</button>
      </form>
      <button type="button" onClick={recuperaDatos}>Recuperar</button>
      <ul>
      {
      personas.map(p => (
        <li key={p.id}>
          <ul>
            <li>Nombre: {p.name}</li>
            <li>Correo Electrónico: {p.email}</li>
            <li>Empresa: {p.company.name}</li>
            <li><button type="button" onClick={() => eliminaPersona(p.id)}>Eliminar</button></li>
          </ul>
        </li>
      ))
    }
    </ul>
    </div>
  )
}
export default App;
