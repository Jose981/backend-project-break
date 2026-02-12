const Product = require("../models/Product");

const baseHtml = require("../helpers/baseHtml");
const getNavBar = require("../helpers/getNavBar");
const getProductCards = require("../helpers/template");
const getProductForm = require("../helpers/formulario");

const productController = {
  //Ver todos los productos

  showProducts: async (req, res) => {
    try {
      const products = await Product.find();
      const cards = getProductCards(products, false);
      const html = baseHtml(getNavBar(false) + cards);

      const botonAñadir = `
              <div class="home-buttons">
                  <a href="/products" class="btn-home">Ver Productos</a>
                  </div>
      `;
      if (!products) {
        res.send(botonAñadir);
      } else {
        res.send(html);
      }
    } catch (error) {
      res.status(500).send("Error al cargar los productos");
    }
  },
};

module.exports = productController;
