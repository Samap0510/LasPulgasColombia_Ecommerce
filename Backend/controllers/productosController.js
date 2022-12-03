const Categorias = require("../models/Categorias");
const Productos = require("../models/Productos");

exports.obtenerProducto = async ( req, res) => {
    try{
        const producto = await Productos.find({ creador: req.usuario.id});

        res.json({ producto });
    }catch(error){
        console.log(error);
    }
};
exports.crearProducto = async ( req, res) => {
    const {categoriaId} =  req.body;
// revisamos si el id de la categoria se encuatra en la base de datos.
    try{
        const foundCategry = await categoria.findById(categoriaId);

        console.log(foundCategry);
        
        const producto = new Productos(req.body);
        
        producto.categoriaId = req.categoria.id;
        producto.save();
    
        res.json(producto);
    }catch(error){
        console.log(error);
    }
};

exports.actualizarProducto = async ( req, res) => {
    const { id } = req.params;
    const producto = await Productos.findById(id);

    if(!producto){
        return res.status(400).json({ msg: "producto no encontrado"});
    }

    producto.nombre = req.body.nombre || producto.nombre;
    producto.description = req.body.description || producto.description;
    producto.stock = req.body.stock || producto.stock;
    producto.precio = req.body.precio || producto.precio;
    producto.imagen = req.body.imagen || producto.imagen;

    producto.save();

    res.json({ producto});

};

exports.borrarProducto = async ( req, res) => {
    try{
        await Productos.deleteOne({ _id: req.params.id});
        res.json({ msg: "Producto eliminado"});
    }catch(error){
        console.log(error);
    }
};