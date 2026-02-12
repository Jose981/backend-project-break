const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

//Obtener todos los productos
router.get("/products", productController.showProducts);

//Obtener detalle del producto
//Devolver el dashboard del administrador
//Devolver formulario para subir un articulo
//Crear un nuevo producto
//Devolver el detalle de un producto
//Devolver formulario para editar un producto
//Actualizar un producto
//Eliminar un producto

module.exports = router;
