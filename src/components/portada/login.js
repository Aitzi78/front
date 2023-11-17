import React, { useState } from "react";
import axios from "axios";
import { async } from "regenerator-runtime";
const LOGIN_ENDPOINT = 'http://localhost:5000/api/auth/login';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSumit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(LOGIN_ENDPOINT, {
        method:" POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password }),

      })
      if (response.ok){
        //dirigir a ruta de todas las preguntas}
      }
      else {
       console.error("error al iniciar sesion")
      }

     
    } catch (error) {
      console.error("Error en la solicitud:",error)
    }
  }
  

  return (
    <div className="contenedor-login">
      <h2 className="titulo-login">Sesion Administrador</h2>
      <form onSubmit={handleSubmit}>
      <label  className="login-usuario" htmlFor="username">Usuario:</label>
      <input
        className="login-input"
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <label className="login-usuario" htmlFor="password">Contraseña:</label>
      <input
        className="login-input"
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button className="login-boton" type="submit" >
        Iniciar Sesión
      </button>
    </form>
    </div>
  );
}
