const Product = require("../models/Product");

const baseHtml = require("../helpers/baseHtml");
const { getNavBar } = require("../helpers/getNavBar");
const getProductCards = require("../helpers/template");
const getProductForm = require("../helpers/formulario");

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
};

module.exports = productController;
