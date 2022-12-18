import React, { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";
import Header from "../Header";
import SideBar from "../SideBar";
import crud from '../../conexiones/crud';
import swal from "sweetalert";

const ActualizarProductos = () => {
//funciones
const navigate=useNavigate();


const { idProducto}=useParams();

console.log(idProducto);

const [producto, setProducto]=useState({
    nombre:'',
    descripcion:'',
    precio:'',
    stock:'',
    imagen:'',
    categoriaId:''
})

const cargarProducto =async()=>{
    const response = await crud.GET(`/api/productos/actualizar${idProducto}`);
   // console.log(response);
    setProducto(response.producto);
}
useEffect(()=>{
    cargarProducto()
},[]);

//console.log(categoria);

const {nombre,imagen,stock,precio,descripcion,idCategoria}=producto;
const onChange=(e)=>{
setProducto({
    ...producto,
        [e.target.name]:e.target.value
    
})

};

const actualizarProducto=async()=>{
    const data ={
        nombre:producto.nombre,
        descripcion:producto.descripcion,
        stock:producto.stock,
        precio:producto.precio,
        imagen:producto.imagen,
        categoriaId:idCategoria 
    }
    const response=await crud.PUT(`/api/productos/${idProducto}`,data);
    const mensaje ="Producto actualizado con exito";
    swal ({
      title:'Información',
      text: mensaje,
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
   
        navigate (`/home-productos/${producto.categoriaId}`)
        
        
}
const onSubmit=(e)=>{
  e.preventDefault();
  actualizarProducto();

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
                        Actualizar Producto
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
                value="Actualizar Producto"
                className="bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-300 transition-colors"
                />

          
            </form>



              </div>

              </main>
              
              
            </div>
           
        
        
            </>
            
              );

    }

export default ActualizarProductos ;
