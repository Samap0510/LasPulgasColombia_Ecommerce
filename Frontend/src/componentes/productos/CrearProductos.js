import React, { useState } from "react";
import {useNavigate,useParams } from "react-router-dom";
import Header from "../Header";
import SideBar from "../SideBar";
import crud from '../../conexiones/crud';
import swal from "sweetalert";

const CrearProductos = () => {
//funciones
const navigate=useNavigate();
const { idCategoria}=useParams();


const [categoria, setCategoria]= useState({
  nombre:'',
  descripcion:'',
  stock:'',
  precio:'',
  imagen:'',
  categoriaId:''

 
});

const {nombre,imagen,stock,precio,descripcion}=categoria;

const onChange = (e)=>{
  setCategoria({
    ...categoria,//... sobreescribir en elmismo json lo que antes se estaba guardando en la caja
    [e.target.name]:e.target.value
  })

};

const IngresarProducto = async ()=>{
//inicio de comentario
  // validacion campos obligatorios
if ((nombre).length===0 || (imagen).length===0|| (descripcion).length===0|| (precio).length===0 || (stock).length===0){
  console.log('diferentes');
  const mensaje = "todos los campos son obligatorios";
  swal ({
    title:'Error',
    text: mensaje,
    icon:'error',
    buttons:{
      confirm:{
        text:'OK',
        value: true,
      visible:true,
      className:'btn btn-danger',
      closeModal:true
      }
    }
  });

}else{
//fin comentario
    const data={
    nombre:categoria.nombre,
    descripcion:categoria.descripcion,
    stock:categoria.stock,
    precio:categoria.precio,
    imagen:categoria.imagen,
    categoriaId:idCategoria   
  }
 // console.log(data);
  const response =await crud.POST(`/api/productos`, data);
   const mensaje = response.mensaje;
   console.log(mensaje);
 
   const mensaje1 = "Producto creado con exito";
      swal ({
        title:'Información',
        text: mensaje1,
        icon:'success',
        buttons:{
          confirm:{
            text:'OK',
            value: true,
          visible:true,
          className:'btn btn-primary',
          closeModal:true
          }
        }
      });

        // redireccionar a la pagina de Home
        navigate(`/home-productos/${idCategoria}`);
};


        
}// comentar

    
  const onSubmit=(e)=>{
    e.preventDefault();
    IngresarProducto();
  }



//html
    return (
    
            <>
            <Header/>
            <div className="md:flex md:min-h-screen">
              <SideBar/>

              <main className="flex-1">
              <div className="mt-10 flex justify-center">
              <h1 className="inline bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
                        Crear Productos
                </h1>

              </div>

              <div className="mt-10 flex justify-center">

              <form 
            onSubmit ={onSubmit}
            className="my-10 bg-white shadow rounded-lg p-10">
              <div className="my-5">

                <label className="uppercase text-gray-600 block text-1x font-bold">Nombre </label>
                  <input 
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="nombre"
                  className="w-full mt-3 p-3 border rounded-xl bg-gray-50 "
                  value={nombre}
                 onChange={onChange} 
                  />

                  <label className="uppercase text-gray-600 block text-1x font-bold">Descripcion </label>
                  <input 
                  type="text"
                  id="descripcion"
                  name="descripcion"
                  placeholder="descripcion"
                  className="w-full mt-3 p-3 border rounded-xl bg-gray-50 "
                  value={descripcion}
                 onChange={onChange} 
                  />

<label className="uppercase text-gray-600 block text-1x font-bold">Stock </label>
                  <input 
                  type="number" min="1"
                  id="stock"
                  name="stock"
                  placeholder="stock"
                  className="w-full mt-3 p-3 border rounded-xl bg-gray-50 "
                  value={stock}
                 onChange={onChange} 
                  />

                <label className="uppercase text-gray-600 block text-1x font-bold">Precio </label>
                  <input 
                  type="number"min="50000"
                  id="precio"
                  name="precio"
                  placeholder="precio"
                  className="w-full mt-3 p-3 border rounded-xl bg-gray-50 "
                  value={precio}
                 onChange={onChange} 
                  />


                <label className="uppercase text-gray-600 block text-1x font-bold">Imagen </label>
                  <input 
                  type="text"
                  id="imagen"
                  name="imagen"
                  placeholder="imagen"
                  className="w-full mt-3 p-3 border rounded-xl bg-gray-50 "
                  value={imagen}
                 onChange={onChange} 
                  />

               
              </div>
              <input
                type="submit"
                value="Guardar Producto"
                className="bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-300 transition-colors"
                />

          
            </form>


              </div>

              </main>
              
              
            </div>
           
        
        
            </>
            
              );

    }

export default CrearProductos;
