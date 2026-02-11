const Product = require("../models/Product");
const { baseHtml, getNavBar, getProductCards } = require("../helpers");

//Ver todos los productos

const productController = {
  showProducts: async (req, res) => {
    const products = await Product.find();
  },
};
