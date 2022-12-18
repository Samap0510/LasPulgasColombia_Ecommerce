import React from "react";
import {Link} from "react-router-dom";


const SideBar = () => {
//funciones



//html
    return (
    <aside className="md:w-80 lg:w-60 px-5 py-10 bg-slate-500">
<Link
 
 className="bg-violet-700 w-full p-3 text-white uppercase font-bold mt-5 text-center rounded-lg "
 to={"/crear-categoria"}
 >
 Crear categoria
 </Link>
 <div className="py-10">
 <Link
 
 className="bg-violet-700 w-full p-3 text-white uppercase font-bold mt-5 text-center rounded-lg "
 to={"/admin"}
 >
 Categorias
 </Link>

 </div>

    </aside>
 


    );

    }

export default SideBar ;
