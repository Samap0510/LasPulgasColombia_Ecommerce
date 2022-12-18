import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import crud from "../../conexiones/crud";
import swal from "sweetalert";

export const ViewProductos = ({producto}) => {

    const navigate=useNavigate()
    
    const { idCategoria}=useParams();
    console.log(idCategoria);
    
    

    const { nombre, descripcion, stock, precio, imagen } = producto;

   

    const borrarProducto=async(e, idProducto)=>{


        swal({
          title: "Quiere eliminar este producto?",
          text: "Una vez eliminado, no podra recuperar este producto!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            e.preventDefault();
            const response =crud.DELETE(`/api/productos/${idProducto}`);
            //console.log(response.mensaje);
           // const mensaje=response.mensaje;
           
            if(response){
              swal("El producto seleccionado fue eliminado correctamente!", {
                icon: "success",
              });
            }

            CargarProductos()
          } else {
            swal("Se cancelo la acción!");
          }
        });

        const CargarProductos=async()=>{
            navigate (`/home-productos/${idCategoria}`)
            window.location.reload ();
            
            }
            
    
        }
        
        
     const actualizarProducto=async(idProducto)=>{
        navigate (`/actualizar-productos/${idProducto}`)
      
      
      }

    return(
        <div className='border-b p-5 flex justify-between items-center'>
            <div className='flex flex-col items-start'>
                <p className='mb-1 text-xl text-gray-50'>nombre: {nombre} </p>
                <p className='mb-1 text-sm text-gray-50 uppercase '>descripción: {descripcion} </p>
                <p className='mb-1 text-gray-50'>stock: {stock} </p>
                <p className='mb-1  text-gray-50'>precio: {precio} </p>
                <img src={imagen} width="150" height="150" 
                ></img>
            
            </div>

            <div className='flex flex-col lg:flex-row gap-2'>
                    <button
                          className="bg-indigo-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                          onClick={(e)=>actualizarProducto(producto._id)}

                      >Editar</button>

                    <button
                          className="bg-red-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                         onClick={(e)=>borrarProducto(e,producto._id)}
                      >Eliminar</button>

            </div>
        </div>
    )
}

export default ViewProductos;