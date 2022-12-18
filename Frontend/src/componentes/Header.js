
import {useNavigate,useParams } from "react-router-dom";
import React, { useState } from "react";


const Header = () => {
//funciones
const navigate=useNavigate();





const cerrarSesion=()=>{
    localStorage.removeItem("token");
    navigate("/");
  
  
  }


//html
    return (
        <header className="px-4 py-5 bg-white border-b">
            <div className="md:flex md: justify-between">
                <h2 className="text-4xl text-violet-600 font-black text-center mb-5 :mb-0">
                    Bienvenido 
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-4">
                <input
                type="submit"
                value="Cerrar Sesión"
                className="bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-300 transition-colors"
               onClick={cerrarSesion}
               />
                </div>

            </div>

        </header>

 


    );

    }

export default Header;
