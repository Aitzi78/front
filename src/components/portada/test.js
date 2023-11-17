import React, { useState, useEffect } from 'react';
import { useCuestionarioApi } from '../../hooks/useCuestionarioApi';
import { usePuntuacion } from '../../context/puntuacion';

import chica from '../imagenes/chica.png';
import chico from '../imagenes/chico.png';
import foto3 from '../imagenes/foto3.png';
import foto4 from '../imagenes/foto4.png';
import foto5 from '../imagenes/foto5.png';
import foto6 from '../imagenes/foto6.png';
import foto7 from '../imagenes/foto7.png';
import foto8 from '../imagenes/foto8.png';
import foto9 from '../imagenes/foto9.png';
import foto10 from '../imagenes/foto10.png';
import foto11 from '../imagenes/foto11.png';
import foto12 from '../imagenes/foto12.png';
import foto13 from '../imagenes/foto13.png';
import foto14 from '../imagenes/foto14.png';
import foto15 from '../imagenes/foto15.png';
import foto16 from '../imagenes/foto16.png';
import foto17 from '../imagenes/foto17.png';
import foto18 from '../imagenes/foto18.png';
import foto19 from '../imagenes/foto19.png';
import foto20 from '../imagenes/foto20.png';
import foto21 from '../imagenes/foto21.png';
import foto22 from '../imagenes/foto22.png';
import foto23 from '../imagenes/foto23.png';

const fotos = {
  1: chica,
  2: chico,
  3: foto3,
  4: foto4,
  5: foto5,
  6: foto6,
  7: foto7,
  8: foto8,
  9: foto9,
  10: foto10,
  11: foto11,
  12: foto12,
  13: foto13,
  14: foto14,
  15: foto15,
  16: foto16,
  17: foto17,
  18: foto18,
  19: foto19,
  20: foto20,
  21: foto21,
  22: foto22,
  23: foto23,
};

export default function Test({
  indicePregunta,
  onRespuestaSeleccionadaChange,
}) {
  const { pregunta, respuestas } = useCuestionarioApi(indicePregunta);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  const { puntuacionTotal, actualizarPuntuacionTotal } = usePuntuacion();
  /* console.log('La pregunta: ', pregunta);
  console.log('Las respuestas: ', respuestas); */

  const handleRespuestaClick = (valor) => {
    // Controlamos respuesta seleccionada
    setRespuestaSeleccionada(valor);

    // Actualizamos puntuacion
    actualizarPuntuacionTotal((puntuacionPrevia) => puntuacionPrevia + valor);
    // Función de retorno para el padre
    onRespuestaSeleccionadaChange(valor);
  };

  return (
    <div className='carta-pregunta'>
      <h3 className='titulo'>{pregunta}</h3>
      {respuestaSeleccionada && (
        <p className='respuestaSeleccionada'> ${respuestaSeleccionada}</p>
      )}

      {respuestas.map((respuesta) => (
        <div
          key={respuesta.idRespuestas}
          className='opcionContenedor'
          onClick={() => handleRespuestaClick(respuesta.valorNumerico)}
        >
          <img
            src={fotos[respuesta.idRespuestas]}
            alt={respuesta.textoRespuestas}
            className='imagen'
          />
          {/* <p className='texto'>{respuesta.textoRespuesta}</p> */}
          <p className='texto'>{respuesta.textoRespuestas}</p>
        </div>
      ))}
    </div>
  );
}
