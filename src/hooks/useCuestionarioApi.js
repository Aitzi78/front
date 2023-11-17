/* import React, { Component } from 'react';
import 'regenerator-runtime/runtime';

//const PREGUNTA_ENDPOINT = 'http://localhost:5000/api/Preguntas/';
//const RESPUESTA_ENDPOINT = 'http://localhost:5000/api/Respuestas/';
const PREGUNTA_ENDPOINT = 'http://localhost:5000/api/preguntas/';
const RESPUESTA_ENDPOINT = 'http://localhost:5000/api/respuestas/';

class CuestionarioApi extends Component {
  constructor() {
    super(props);
    this.state = {
      pregunta: null,
      respuestas: [],
    };
  }
  componentDidMount() {
    this.fetchPreguntaYRespuestas();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.indicePregunta !== this.props.indicePregunta) {
      this.fetchPreguntaYRespuestas();
    }
  }
  async fetchPreguntaYRespuestas() {
    const { indicePregunta } = this.props;
    console.log('Indice pregunta: ', indicePregunta);

    try {
      //recuperamos la pregunta
      const preguntaResponse = await fetch(PREGUNTA_ENDPOINT + indicePregunta);

      const preguntaData = await preguntaResponse.json();
      //recuperamos la respuesta
      const respuestasResponse = await fetch(
        RESPUESTA_ENDPOINT + indicePregunta
      );
      const respuestasData = await respuestasResponse.json();
      //actualizamos el estado
      this.setState({
        pregunta: preguntaData.textoPregunta,
        respuestas: respuestasData,
      });
    } catch (error) {
      console.error('error al recuperar los datos', error);
    }
  }
  render() {
    const { pregunta, respuestas } = this.state;
    return this.props.render({ pregunta, respuestas });
  }
}

export default function useCuestionarioApi(indicePregunta) {
  // hook que devuelve pregunta y respuestas
  return (
    <CuestionarioApi
      indicePregunta={indicePregunta}
      render={({ pregunta, respuestas }) => ({ pregunta, respuestas })}
    />
  );
}
 */
import { useEffect, useState } from 'react';

const PREGUNTA_ENDPOINT = 'http://localhost:5000/api/Preguntas/';
const RESPUESTA_ENDPOINT = 'http://localhost:5000/api/Respuestas/';

export function useCuestionarioApi(indicePregunta) {
  /* Hook que devuelve preguntas y respuestas */
  const [pregunta, setPregunta] = useState(null);
  const [respuestas, setRespuestas] = useState([]);
  // Añadimos numero de pregunta a la api
  //console.log(numeroPregunta);
  useEffect(() => {
    /* fetch(PREGUNTA_ENDPOINT + numeroPregunta.numPregunta)
      .then((res) => res.json)
      .then((data) => console.log(data.titulo)); */
    const fetchPregunta = async () => {
      const response = await fetch(PREGUNTA_ENDPOINT + indicePregunta);
      const data = await response.json();

      setPregunta(data.titulo);
    };

    const fetchRespuestas = async () => {
      const response = await fetch(RESPUESTA_ENDPOINT + indicePregunta);
      const data = await response.json();

      setRespuestas(data);
    };

    fetchPregunta();
    fetchRespuestas();
  }, [indicePregunta]);

  return { pregunta, respuestas };
}
