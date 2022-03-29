import React, { Component } from 'react'

export class Historial extends Component {
    render() {

        const { lista } = this.props
        const ultimoElementoLista = lista[lista.length - 1];

        return (
            <div className="recordatorio">
                <h3>Selección anterior:  {ultimoElementoLista}  </h3>
                <h4>Historial de opciones elegidas:</h4>
                <ul>{(lista.length > 1)
                    ?
                    lista.map((opcion, i) =>
                        <li key={i}>{opcion}</li>
                    )
                    :
                    ""
                }
                </ul>
            </div>
        )
    }
}
