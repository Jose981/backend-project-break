const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");
const upload = require("../middlewares/uploadCloudinaryMiddleware");

//Seccion dashboard con todos los productos
router.get("/", dashboardController.home);

//Detalle de un producto
router.get("/detalle/:id", dashboardController.verProducto);

//Subir un nuevo producto
router.get("/new", dashboardController.createProduct);
router.post("/new", upload.single("image"), dashboardController.addProduct);

//Actualizar un producto
router.get("/editar/:id", dashboardController.editProduct);
router.post(
  "/editar/:id",
  upload.single("image"),
  dashboardController.updateProduct,
);

//Eliminar un producto
router.get("/eliminar/:id", dashboardController.deleteProduct);

module.exports = router;
