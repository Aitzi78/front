import React from "react";
import Login from "../portada/login";
import { Link } from "react-router-dom";
export default function(){
    return(
        <div>
            <div>
                <Link to="/administrador"/>
            </div>
            <div>
            <Link to="/home">
                <button>Salir</button>
            </Link>
            </div>
            
            <Login />
        </div>
       
    );
}