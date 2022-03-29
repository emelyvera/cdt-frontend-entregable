import React, { Component } from 'react';
import data from './data/data.json'
import { Boton } from './component/Boton';
import { Historia } from './component/Historia';
import { Historial } from './component/Historial';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      historia: data[0],
      opcionSeleccionada: [],
    }

    this.contador = 0;

    this.obtenerIdHistoriaSiguiente = this.obtenerIdHistoriaSiguiente.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.empezar = this.empezar.bind(this);

  }

  componentDidMount = () => {

    alert("Aventuras que tu elijes")

  };

  obtenerIdHistoriaSiguiente(opcion) {
    const { opcionSeleccionada } = this.state;
    const opcionElejida = (opcionSeleccionada.length + 1) + opcion.toLowerCase();
    return data.find((e) => e.id === opcionElejida);
  };

  handleClick(opcion) {

    this.contador++;

    if (this.contador === 5) {
      this.contador = 0;
      alert('Se acabo y volvera a empezar');
      this.empezar();

    } else {

      const { opcionSeleccionada } = this.state;
      this.setState({ opcionSeleccionada: [...opcionSeleccionada, opcion] }, () => {
        const nuevaHistoriaAMostrar = this.obtenerIdHistoriaSiguiente(opcion)
        this.setState({
          historia: nuevaHistoriaAMostrar
        })
      })

    }
  };

  empezar() {
    this.setState({
      historia: data[0],
      opcionSeleccionada: [],
    })
  }



  render() {
    const { historia, opcionSeleccionada } = this.state;
    return (
      <div className='layout'>
        <Historia historia={historia.historia} />

        <Boton
          handleClick={this.handleClick}
          opcionA={historia.opciones.a}
          opcionB={historia.opciones.b}
        />
        <Historial lista={opcionSeleccionada} />
      </div>

    )

  }
}

