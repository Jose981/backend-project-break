require("dotenv").config();

const express = require("express");
const session = require("express-session");

const app = express();
const PORT = 4000;

const { dbConnection } = require("./config/db");
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Acceso a las rutas
app.use("/", routes);

dbConnection();

//Leer formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Archivos estáticos
app.use(express.static("public"));

//Configuracion de sesion (LOGIN)
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);

app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`);
});

module.exports = app;
