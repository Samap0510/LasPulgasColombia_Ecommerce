const Usuario = require("../models/Usuarios");
const bcryptjs = require("bcryptjs");

//Obtener usuario
exports.obtenerUsuario = async (req, res) => {
    try{
        const usuarios = await Usuario.find();
        res.json(usuarios );
    }catch(error){
        console.log(error);
    }
};


exports.crearUsuario = async ( req, res) => {
    //console.log(req.body);
    const {password , email} = req.body;
    
    try{
        // validacion de usuario, no deben existir dos usuarios con el mismo correo
        let usuario = await Usuario.findOne({ email});

        if (usuario) {
            return res.status(404).json({ msg : "El usuario ya existe"});
        }

         // crear el nuevo usuario
        usuario = new Usuario(req.body); 
        //hash
        usuario.password = await bcryptjs.hash(password, 10);
        //Guardar en la base de datos
        const usuarioAlmacenado = await usuario.save();

        res.json(usuarioAlmacenado);

    }catch(error){
        console.log(error)
    }
};



