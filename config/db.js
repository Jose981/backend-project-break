const mongoose = require("mongoose");
require("dotenv").config;

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Base de datos conectada correctamente.");
  } catch (error) {
    console.error(error);
    throw new Error(
      "Error a la hora de establecer conexión con la base de datos.",
    );
  }
};

module.exports = {
  dbConnection,
};
