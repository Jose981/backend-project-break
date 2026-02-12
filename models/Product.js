const mongoose = require("mongoose");
const validColors = ["Rojo", "Azul", "Verde", "Negro", "Blanco"];
const tallas = ["XS", "S", "M", "L", "XL"];
const categorias = ["Camisetas", "Pantalones", "Zapatos", "Accesorios"];

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    descripcion: { type: String, required: true },
    imagen: { type: String, required: true },
    categoria: { type: String, enum: categorias, required: true },
    talla: { type: String, enum: tallas, required: true },
    color: { type: String, enum: validColors, required: true },
    price: { type: Number, required: true, min: 0 },
  },
  {
    timestamps: true,
  },
);

const Post = mongoose.model("Post", productSchema);

module.exports = Post;
