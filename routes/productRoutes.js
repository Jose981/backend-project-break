const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const upload = require("../middlewares/uploadCloudinaryMiddleware");
//Obtener todos los productos
router.get("/products", productController.showProducts);

//Obtener detalle de un producto
router.get("/products/:productId", productController.showProductById);

//Obtener detalle del producto
//Devolver el dashboard del administrador

//Devolver formulario para subir un articulo
router.get("/dashboard/new", productController.createProduct);
//Crear un nuevo producto
router.post("/dashboard", upload.any(), productController.addProduct);

//Devolver formulario para editar un producto
//Actualizar un producto
//Eliminar un producto

module.exports = router;
