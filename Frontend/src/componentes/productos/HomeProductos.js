import React, { useEffect, useState } from "react";
import {Link, useNavigate,useParams } from "react-router-dom";
import Header from "../Header";
import SideBar from "../SideBar";
import crud from '../../conexiones/crud';
import swal from "sweetalert";
import ViewProductos from "./ViewProductos";

const HomeProductos = () => {
//funciones
const navigate=useNavigate();

const { idCategoria}=useParams();

const [productos, setProductos]=useState([]);

const cargarProductos = async()=>{
const response =await crud.GET(`/api/productos/${idCategoria}`);
setProductos(response);
};
console.log(productos);
useEffect(()=>{
cargarProductos();

},[]);

//html
    return (
    
            <>
            <Header/>
            <div className="md:flex md:min-h-screen">
              <SideBar/>

              <main className="flex-1">
              <div className="mt-10 flex justify-center">
              <h1 className="inline bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
                        Lista de productos
                </h1>
                </div>
                <div className="p-10">
                  <Link 
                  to ={`/crear-producto/${idCategoria}`}
                  className="bg-violet-600 w-full p-3 text-white uppercase font-bold mt-5 text-center rounded-lg">
                  Crear Producto
                  </Link>

                </div>
                <div className="bg-gray-600 shadow mt-10 rounded-lg">
                {productos.map( producto =>
            <ViewProductos
              key={producto._id}
              producto = {producto}
            />

          )};

         
        </div>

              </main>
              </div>

             
        
        
            </>
            
        
    );
}
export default HomeProductos;
