import React from 'react';
import { Link } from 'react-router-dom';
import TituloPortada from '../portada/titulo-portada';
export default function () {
  return (
    <div>
      <div>
        <Link to='/home' />
        <Link to='/play' />
      </div>

      <TituloPortada />
    </div>
  );
}
