import React from 'react';
import { NavLink} from "react-router-dom";

import Titulo from "../imagenes/titulo.png";
import PortadaContenedor from './portada-contenedor';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


export default function TituloPortada() {
  

  return(
    <div className='titulo-portada'>           
      
      <NavLink  to="/fotosCarrusel" activeClassName="Fotos" >
        Fotos
      </NavLink>
      <h1></h1>
      <img src= {Titulo} />
      <Link to="/play">
       <button className="boton-play-portada">Play</button>
      </Link>
    

      
        
     
    </div>
  )
}