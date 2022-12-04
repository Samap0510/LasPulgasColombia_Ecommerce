const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuariosController");


router.get("/", usuarioController.obtenerUsuario);
router.post(
    "/",
    usuarioController.crearUsuario
);

// definir las rutas
module.exports = router;