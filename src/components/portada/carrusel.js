import React from "react";
import Slider from 'react-slick'
import { Link, useHistory } from "react-router-dom";


import carrusel1 from "../imagenes/carrusel1.png";
import carrusel2 from "../imagenes/carrusel2.png";
import carrusel3 from "../imagenes/carrusel3.png";
import carrusel4 from "../imagenes/carrusel4.png";
import carrusel5 from "../imagenes/carrusel5.png";
import carrusel7 from "../imagenes/carrusel7.png";
import carrusel9 from "../imagenes/carrusel9.png";
import carrusel10 from "../imagenes/carrusel10.png";
import carrusel11 from "../imagenes/carrusel11.png";
import carrusel12 from "../imagenes/carrusel12.png";
import fondoCarrusel from "../imagenes/fondoCarrusel.png";


export default  function Carrusel(){
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
    const ajustes = {
       
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        
      };
    
      const imagenes= [
        carrusel1,
        carrusel2,
        carrusel3,
        carrusel4,
        carrusel5,
        carrusel2,
        carrusel7,
        carrusel4,
        carrusel9,
        carrusel2,
        carrusel10,
        carrusel4,
        carrusel11,
        carrusel2,
        carrusel12,
        carrusel4,
      ];
      
     
    return(
        <div className="carrusel_contenedor" >
          <h1>ESTE ES MI PAPA.. </h1>
    
          <Slider {...ajustes}>
            {imagenes.map((image, index) => (
            <div key={index} className="carrusel_imagen_contenedor">
            <img
              src={image}
              alt={`Imagen ${index + 1}`}
              className="carrusel_imagen"
            />
            </div>
          ))}
       
         </Slider>
         <button className='boton-salir-carrusel'onClick={handleClick}>Salir</button>
        </div>
    )
}