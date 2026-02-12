require("dotenv").config();

const express = require("express");
const session = require("express-session");

const app = express();

//Leer formularios

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Archivos estáticos

app.use(express.static("public"));

// Configuración de la sesion

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);

//Importar las rutas

const router = express.Router();
const productsRoutes = require("./productRoutes");
const authRoutes = require("./authRoutes");

router.use(express.static("public"));

// Importar templates

const baseHtml = require("../helpers/baseHtml");
const home = require("../helpers/homeHtml");

// Ruta principal

router.get("/", (req, res) => {
  const content = home;
  res.send(baseHtml(content));
});

// Rutas
router.use("/", productsRoutes);
router.use("/auth", authRoutes);

module.exports = router;

// Conexión con el puerto

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Conexión establecida en el puerto ${PORT}`);
});
