import React, { useState } from 'react';


function DetallePersona(props){
    return (
        <div >
        { props.persona.map( p => (
            <div key={p.id}>
                <div> Nombre: {p.nombre} </div>
                <div> Edad: {p.edad} </div>
                <div> Carrera: {p.carrera} </div>
                <button type="button" onClick={()=>props.onNameChange(p.id)}>Eliminar</button>
            </div>
            ))
        }
        </div>
    )
}
export default DetallePersona;