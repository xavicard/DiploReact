import React, { Component } from 'react';

class Pie extends Component {
    render() {
        return (
            <div>
                Todos los derechos reservados {this.props.nombre}
            </div>
        );
    }
}

export default Pie;