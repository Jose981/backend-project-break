const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

//Inicio
router.get("/", productController.pantallaInicio);
//Obtener todos los productos
router.get("/products", productController.showProducts);

//Obtener detalle de un producto
router.get("/products/:productId", productController.showProductById);

module.exports = router;
