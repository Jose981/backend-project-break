const Product = require("../models/Product");

const baseHtml = require("../helpers/baseHtml");
const { getNavBar } = require("../helpers/getNavBar");
const getProductCards = require("../helpers/template");
const createProductForm = require("../helpers/formulario");

const cloudinary = require("../config/cloudinary");
const fs = require("fs");

const productController = {
  //Ver todos los productos
  showProducts: async (req, res) => {
    try {
      const products = await Product.find();
      const isDashboard = req.session && req.session.isAdmin;

      if (products.length === 0) {
        const sinProductos = `
        <div class="sin-productos">
        <h2>No hay productos</h2>
        ${isDashboard ? '<a href="/dashboard" class="btn">Añadir el primer producto</a>' : "<p>Vuelve pronto.</p>"}
        </div>
        `;
        return res.send(baseHtml(getNavBar(isDashboard) + sinProductos));
      }

      const cards = getProductCards(products, false);
      const html = baseHtml(getNavBar(isDashboard) + cards);

      res.send(html);
    } catch (error) {
      res.status(500).send("Error al cargar los productos: " + error.message);
    }
  },

  //Ver un producto
  showProductById: async (req, res) => {
    try {
      const { productId } = req.params;
      const product = await Product.findById(productId).lean();
      const htmlProduct = getProduct(product, false);
      const html = baseHtml(getNavBar(false) + htmlProduct);

      const botonAñadir = `
              <div class="home-buttons">
                  <a href="/products" class="btn-home">Volver</a>
                  </div>
      `;

      if (!product) {
        res.send(botonVolver);
      } else {
        res.send(html);
      }
    } catch (error) {
      res.status(500).send("Error al cargar el producto");
    }
  },

  //Formulario para subir un producto nuevo
  createProduct: async (req, res) => {
    try {
      const isDashboard = req.session && req.session.isAdmin;

      if (isDashboard) {
        return res.send(baseHtml(getNavBar(true) + createProductForm()));
      } else {
        return res.redirect("/login");
      }
    } catch (error) {
      res
        .status(500)
        .send("Error a la hora de cargar el formulario para subir un prodcuto");
    }
  },

  //Añadir el nuevo producto
  addProduct: async (req, res) => {
    try {
      const { name, descripcion, price, talla, color, categoria } = req.body;

      const file = req.file || (req.files && req.files[0]);

      if (!file) {
        return res
          .status(400)
          .send("Tiene que subir una imagen del producto obligatoriamente.");
      }

      // 🔥 Subir imagen a Cloudinary
      const result = await cloudinary.uploader.upload(file.path, {
        folder: "tienda_ropa",
      });

      // 🗑️ Borrar archivo local después de subir
      try {
        fs.unlinkSync(file.path);
      } catch (err) {
        console.warn("No se pudo borrar archivo temporal:", err.message);
      }

      const newProduct = new Product({
        name,
        descripcion,
        price: parseFloat(price),
        talla,
        color,
        categoria,
        imagen: result.secure_url, // 👈 ahora guardamos la URL real
      });

      await newProduct.save();

      res.redirect("/products");
    } catch (error) {
      console.error("Error al crear producto:", error);
      res.status(500).send("No se ha podido crear el producto.");
    }
  },
};

module.exports = productController;
