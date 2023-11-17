import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Test from './test';
import TituloPortada from './titulo-portada';
import { usePuntuacion } from '../../context/puntuacion';

export default class PortadaContenedor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indicePreguntaActual: 1,
      respuestas: [],
    };
  }

  manejarSiguientePregunta = () => {
    const { indicePreguntaActual, respuestas } = this.state;

    if (respuestas.length === indicePreguntaActual) {
      alert('Debes seleccionar una respuesta antes de avanzar.');
      return;
    }

    this.setState((estadoPrevio) => ({
      indicePreguntaActual: estadoPrevio.indicePreguntaActual + 1,
    }));
  };

  manejarPreguntaAnterior = () => {
    this.setState((estadoPrevio) => ({
      indicePreguntaActual: estadoPrevio.indicePreguntaActual - 1,
    }));
  };

  // manejarSeleccionRespuesta = (valor) => {
  //   const { respuestas, indicePreguntaActual } = this.state;

  //   const nuevasRespuestas = [...respuestas];
  //   nuevasRespuestas[indicePreguntaActual] = valor;

  //   this.setState({
  //     respuestas: nuevasRespuestas,
  //   });
  // };

  calcularPuntuacionTotal = () => {
    return this.state.respuestas.reduce((total, valor) => total + valor, 0);
  };

  render() {
    const { puntuacionTotal } = usePuntuacion();
    // const handleBotonClick = this.handleBotonClick;
    //     const preguntas = [
    //     {
    //         pregunta: "¿Quieres ser mi suporHeroina?",
    //         opciones: [
    //             {valor: 0, imagen:chica, texto:"Chica"},
    //             {valor: 0, imagen:chico , texto:"Chico"},

    //         ],
    //     },
    //     {
    //         pregunta: " Como te sientes cuando llegas a casa?",
    //         opciones: [
    //             {valor: 0, imagen:foto3, texto:"Feliz"},
    //             {valor: 2, imagen:foto4 , texto:"Triste"},
    //             {valor: 4, imagen:foto5 , texto:"Asustad@"},
    //         ],
    //     },
    //     {
    //         pregunta: " Con quien juegas en casa?",
    //         opciones: [
    //             {valor: 0, imagen:foto6 , texto:"Con Todos"},
    //             {valor: 2, imagen:foto7 , texto:"Con Mamá"},
    //             {valor: 4, imagen:foto8 , texto:"Sol@"},
    //         ],
    //     },
    //     {
    //         pregunta: " Que haces cuando tu papá llegas a casa?",
    //         opciones: [
    //             {valor: 0, imagen:foto9 , texto:"Le abrazo"},
    //             {valor: 4, imagen:foto10 , texto:"Me escondo"},
    //             {valor: 4, imagen:foto11 , texto:"Abrazo a mamá"},
    //         ],
    //     },
    //      {
    //         pregunta: " Como ves a papá y a mamá cuando están juntos?",
    //         opciones: [
    //             {valor: 0, imagen:foto12 , texto:"Felices"},
    //             {valor: 2, imagen:foto14 , texto:"No hablan"},
    //             {valor: 4, imagen:foto13 , texto:"Nunca están juntos"},
    //         ],
    //     },
    //      {
    //         pregunta: " Como ves a papá y a mamá cuando se enfadan?",
    //         opciones: [
    //             {valor: 0, imagen:foto15 , texto:"Tristes"},
    //             {valor: 2, imagen:foto16 , texto:"A Mamá llorando"},
    //             {valor: 6, imagen:foto17 , texto:"A Mamá con miedo"},
    //         ],
    //     },
    //     {
    //         pregunta: " Como te sientes cuando papá y mamá se enfadan?",
    //         opciones: [
    //             {valor: 0, imagen:foto18 , texto:"Me tapo los oídos"},
    //             {valor: 4, imagen:foto19 , texto:" Tengo miedo"},
    //             {valor: 6, imagen:foto20 , texto:"Tengo miedo por mamá"},
    //         ],
    //     },
    //     {
    //         pregunta: " Que pasa cuando papá se enfada contigo?",
    //         opciones: [
    //             {valor: 0, imagen:foto21 , texto:"Hablamos"},
    //             {valor: 6, imagen:foto22 , texto:"Me amenaza"},
    //             {valor: 8, imagen:foto23 , texto:"Me pega"},
    //         ],
    //     },
    // ];
    //const preguntaActual = preguntas[this.state.indicePreguntaActual];

    return (
      <div>
        <Test indicePregunta={this.state.indicePreguntaActual} />
        <div>
          <p>Puntuación Total: {this.calcularPuntuacionTotal()}</p>
        </div>
        <button
          className='boton-navegacion boton-anterior'
          onClick={this.manejarPreguntaAnterior}
          disabled={this.state.indicePreguntaActual === 0}
        >
          Anterior
        </button>

        <button
          className='boton-navegacion boton-siguiente'
          onClick={this.manejarSiguientePregunta}
        >
          Siguiente
        </button>

        <Link to='aviso'>
          <button>Siguiente</button>
        </Link>
        {/* <h1>Puntuacion total: {puntuacionTotal}</h1> */}
      </div>
    );
  }
}
