import React, { createContext, useContext, useState } from 'react';

const PuntuacionContext = createContext();

export const usePuntuacion = () => {
  return useContext(PuntuacionContext);
};

export const PuntuacionProvider = ({ children }) => {
  const [puntuacionTotal, setPuntuacionTotal] = useState(0);

  const actualizarPuntuacionTotal = (nuevaPuntuacion) => {
    setPuntuacionTotal(nuevaPuntuacion);
  };

  const reiniciarPuntuacion = () => {
    setPuntuacionTotal(0);
  };

  return (
    <PuntuacionContext.Provider
      value={{
        puntuacionTotal,
        actualizarPuntuacionTotal,
        reiniciarPuntuacion,
      }}
    >
      {children}
    </PuntuacionContext.Provider>
  );
};
// En tu archivo de contexto (por ejemplo, PuntuacionContext.js)
/* import React, { createContext, Component } from 'react';

const PuntuacionContext = createContext();

export class PuntuacionProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      puntuacionTotal: 0,
    };
  }

  actualizarPuntuacionTotal = (nuevaPuntuacion) => {
    this.setState({ puntuacionTotal: nuevaPuntuacion });
  };

  render() {
    return (
      <PuntuacionContext.Provider
        value={{
          puntuacionTotal: this.state.puntuacionTotal,
          actualizarPuntuacionTotal: this.actualizarPuntuacionTotal,
        }}
      >
        {this.props.children}
      </PuntuacionContext.Provider>
    );
  }
}

export const PuntuacionConsumer = PuntuacionContext.Consumer; */
