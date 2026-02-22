const Product = require("../models/Product");

const baseHtml = require("../helpers/baseHtml");
const { getNavBar } = require("../helpers/getNavBar");
const dashboardHtml = require("../helpers/dashboardHtml");
const {
  getProductCardsDashboard,
  getProductDashboard,
} = require("../helpers/dashboardHtml");
const createProductForm = require("../helpers/formulario");
const editProductForm = require("../helpers/formularioEditar");

const cloudinary = require("../config/cloudinary");
const fs = require("fs");

const productDashboardController = {
  //Home
  home: async (req, res) => {
    try {
      const isDashboard = req.session && req.session.isAdmin;
      if (isDashboard) {
        const products = await Product.find();
        const productsHtml = getProductCardsDashboard(products);
        return res.send(baseHtml(getNavBar(true) + productsHtml));
      } else {
        return res.redirect("/auth");
      }
    } catch (error) {
      res.status(500).send("Error a la hora de acceder al dashboard.");
    }
  },

  //Detalle de un producto
  verProducto: async (req, res) => {
    try {
      const isDashboard = req.session && req.session.isAdmin;

      if (!isDashboard) {
        return res.redirect("/auth");
      }

      const { id } = req.params;
      const product = await Product.findById(id);

      if (!product) {
        return res.status(404).send("Producto no encontrado");
      }

      const htmlProduct = getProductDashboard(product);
      const html = baseHtml(getNavBar(true) + htmlProduct);
      return res.send(html);
    } catch (error) {
      console.error("Error al cargar el producto:", error);
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
        return res.redirect("/auth");
      }
    } catch (error) {
      res
        .status(500)
        .send("Error a la hora de cargar el formulario para subir un producto");
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

      const result = await cloudinary.uploader.upload(file.path, {
        folder: "tienda_ropa",
      });

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
        imagen: result.secure_url,
      });

      await newProduct.save();

      res.redirect("/dashboard");
    } catch (error) {
      console.error("Error al crear producto:", error);
      res.status(500).send("No se ha podido crear el producto.");
    }
  },

  //Formulario para editar un producto
  editProduct: async (req, res) => {
    try {
      const isDashboard = req.session && req.session.isAdmin;

      if (!isDashboard) {
        return res.redirect("/auth");
      }

      const { id } = req.params;
      const product = await Product.findById(id);

      if (!product) {
        return res.status(404).send("Producto no encontrado");
      }

      return res.send(baseHtml(getNavBar(true) + editProductForm(product)));
    } catch (error) {
      console.error("Error al cargar formulario de edición:", error);
      res
        .status(500)
        .send("Error a la hora de cargar el formulario de edición");
    }
  },

  //Actualizar un producto
  updateProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, descripcion, price, talla, color, categoria } = req.body;

      const file = req.file || (req.files && req.files[0]);
      const product = await Product.findById(id);

      if (!product) {
        return res.status(404).send("Producto no encontrado");
      }

      let imagen = product.imagen;

      if (file) {
        const result = await cloudinary.uploader.upload(file.path, {
          folder: "tienda_ropa",
        });
        imagen = result.secure_url;

        try {
          fs.unlinkSync(file.path);
        } catch (err) {
          console.warn("No se pudo borrar archivo temporal:", err.message);
        }
      }

      await Product.findByIdAndUpdate(id, {
        name,
        descripcion,
        price: parseFloat(price),
        talla,
        color,
        categoria,
        imagen,
      });

      res.redirect("/dashboard");
    } catch (error) {
      console.error("Error al actualizar producto:", error);
      res.status(500).send("No se ha podido actualizar el producto.");
    }
  },

  //Eliminar un producto
  deleteProduct: async (req, res) => {
    try {
      const isDashboard = req.session && req.session.isAdmin;

      if (!isDashboard) {
        return res.redirect("/auth");
      }

      const { id } = req.params;
      const product = await Product.findById(id);

      if (!product) {
        return res.status(404).send("Producto no encontrado");
      }

      // Eliminar imagen de Cloudinary si existe
      if (product.imagen) {
        try {
          const publicId = product.imagen.split("/").pop().split(".")[0];
          await cloudinary.uploader.destroy(`tienda_ropa/${publicId}`);
        } catch (err) {
          console.warn("No se pudo borrar imagen de Cloudinary:", err.message);
        }
      }

      await Product.findByIdAndDelete(id);

      res.redirect("/dashboard");
    } catch (error) {
      console.error("Error al eliminar producto:", error);
      res.status(500).send("No se ha podido eliminar el producto.");
    }
  },
};

module.exports = productDashboardController;
