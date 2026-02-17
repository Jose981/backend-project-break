require("dotenv").config();
const express = require("express");
const session = require("express-session");
const { dbConnection } = require("./config/db");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 4000;

//Conexión a Base de Datos
dbConnection();

// Middlewares de análisis de cuerpo (Body Parser)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CONFIGURACIÓN DE SESIÓN
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
  }),
);

// Archivos estáticos
app.use(express.static("public"));

// ACCESO A LAS RUTAS
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});

module.exports = app;
