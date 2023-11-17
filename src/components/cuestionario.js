import React, {Component} from "react";

export default class  Cuestionario extends Component(){
    constructor(props) {
        super(props);
    
        this.state = {
          preguntaActual: 1,
        };
      }

    handleClick = () => {
        this.setState((prevState) => ({
          preguntaActual: prevState.preguntaActual + 1,
        }));
      };
    render(){
    
        return(
            
          <div>
               
               
                <div>
                  <p>Puntuación Total: </p>
                </div>
                <button
                  className="boton-navegacion boton-anterior"
                  
                >
                  Anterior
                </button>
                
                <button
                  className="boton-navegacion boton-siguiente"
                 
                >
                  Siguiente
                </button>
            
                
                  
                 
               
               
             </div>
           
        )
    }
    
}