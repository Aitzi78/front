import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Test from './test';
import TituloPortada from './titulo-portada';
import { usePuntuacion } from '../../context/puntuacion';

const MAX_PREGUNTAS = 8;

const PortadaContenedor = () => {
  const [indicePreguntaActual, setIndicePreguntaActual] = useState(1);
  const [respuestas, setRespuestas] = useState([]);

  const { puntuacionTotal } = usePuntuacion();
  const [finCuestionario, setFinCuestionario] = useState(false);

  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);

  // Limpiamos respuestaSeleccionada cuando cambia la pregunta
  useEffect(() => {
    setRespuestaSeleccionada(null);
  }, [indicePreguntaActual]);

  const handleRespuestaSeleccionadaChange = (valor) => {
    setRespuestaSeleccionada(valor);
  };

  const manejarSiguientePregunta = () => {
    if (indicePreguntaActual < MAX_PREGUNTAS) {
      setIndicePreguntaActual((indicePrevio) => indicePrevio + 1);
    } else {
      // Si ya no hay más preguntas, redirige a los resultados
      setFinCuestionario(true);
    }
  };

  const manejarPreguntaAnterior = () => {
    setIndicePreguntaActual((indicePrevio) =>
      indicePrevio > 1 ? indicePrevio - 1 : indicePrevio
    );
  };

  return (
    <div>
      {finCuestionario && <Redirect to='/aviso' />}
      <Test
        indicePregunta={indicePreguntaActual}
        onRespuestaSeleccionadaChange={handleRespuestaSeleccionadaChange}
      />
      <div>
        <p> {puntuacionTotal}</p>
      </div>
      <button
        className='boton-navegacion boton-anterior'
        onClick={manejarPreguntaAnterior}
        disabled={indicePreguntaActual === 1}
      >
        Anterior
      </button>

      <button
        className='boton-navegacion boton-siguiente'
        onClick={manejarSiguientePregunta}
        disabled={respuestaSeleccionada === null}
      >
        {indicePreguntaActual == 3 ? 'Ver resultados' : 'Siguiente'}
      </button>

      <Link to='aviso'>
      
      </Link>
      <h1>{puntuacionTotal}</h1>
    </div>
  );
};

export default PortadaContenedor;
