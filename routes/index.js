const express = require("express");
const router = express.Router();
const productsRoutes = require("./productRoutes");
const authRoutes = require("./authRoutes");
const dashboardRoutes = require("./dashboardRoutes");

router.use("/", productsRoutes);
router.use("/auth", authRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;
