import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroina2 from '../imagenes/heroina2.png';
import heroina3a from '../imagenes/heroina3a.png';
import heroina3b from '../imagenes/heroina3b.png';
import heroina4 from '../imagenes/heroina4.png';
import heroina4b from '../imagenes/heroina4b.png';
import { usePuntuacion } from '../../context/puntuacion';

export default function PuntuacionTotal({ puntuacion }) {
  const { puntuacionTotal, reiniciarPuntuacion } = usePuntuacion();

  let mensaje, imagen, className;

  if (puntuacionTotal <= 14) {
    console.log('Baja puntuación:', puntuacionTotal);
    mensaje = 'Gracias!!';
    imagen = [heroina2];
    className = 'baja';
  } else if (puntuacionTotal <= 26) {
    console.log('Puntuación media:', puntuacionTotal);
    mensaje = 'Eres mi Heroina!!';
    imagen = [heroina3a, heroina3b];
    className = 'media';
  } else {
    console.log('Alta puntuación:', puntuacionTotal);
    mensaje = 'Eres mi SuperHeroina!!.';
    imagen = [heroina4, heroina4b];
    className = 'alta';
  }

  const handleReiniciarClick = () => {
    reiniciarPuntuacion();
  };

  console.log('Mensaje:', mensaje);
  console.log('Imagen:', imagen);

  return (
    <div className='resultado-puntos'>
      <p className='titulo-resultado'>{mensaje}</p>
      {imagen.map((imagen, index) => (
        <img
          key={index}
          src={imagen}
          alt={`Descripción de la imagen ${index}`}
        />
      ))}
      <Link to='/fotosCarrusel'>
        <button>Fotos</button>
      </Link>
      <Link to='/'>
        <button className='boton-fotos-aviso' onClick={handleReiniciarClick}>
          Salir
        </button>
      </Link>
    </div>
  );
}
