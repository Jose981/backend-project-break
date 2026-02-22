const Product = require("../models/Product");

const baseHtml = require("../helpers/baseHtml");
const { getNavBar } = require("../helpers/getNavBar");
const homeHtml = require("../helpers/homeHtml");
const { getProductCards, getProduct } = require("../helpers/template");

const productController = {
  //Cargar el inicio de la pantalla
  pantallaInicio: async (req, res) => {
    try {
      const home = baseHtml(homeHtml());
      return res.send(home);
    } catch (error) {
      res.status(500).send("No se ha podido cargar la página.");
    }
  },

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

      if (!product) {
        const botonVolver = `
          <div class="home-buttons">
            <a href="/products" class="btn-home">Volver</a>
          </div>
        `;
        return res.send(baseHtml(getNavBar(false) + botonVolver));
      }

      const htmlProduct = getProduct(product, false);
      const html = baseHtml(getNavBar(false) + htmlProduct);
      return res.send(html);
    } catch (error) {
      res.status(500).send("Error al cargar el producto");
    }
  },
};

module.exports = productController;
