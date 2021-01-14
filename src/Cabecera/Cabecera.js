import React, { Component } from 'react';
import Pie from '../Pie/Pie';

class Cabecera extends Component {

    render() {
        const fecha=new Date().getUTCFullYear();
        const nombre=this.props.nombre;
        return (
            <div>
                <h1>Bienvenidos! {nombre} al año {fecha}</h1>
                <Pie 
                    nombre={nombre}
                />
            </div>
        );
    }
}

export default Cabecera;
/*import React from 'react';

function Cabecera(props) {
    const fecha=new Date().getUTCFullYear();
    const nombre=props.nombre;
    return (
        <h1>Bienvenido {props.nombre} al año {fecha}</h1>
    );
}
export default Cabecera;
*/