const express = require("express");
const app = express();
const PORT = 4000;

const { dbConnection } = require("./config/db");
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

dbConnection;

app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`);
});

module.exports = app;
