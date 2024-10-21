const express = require("express");
const { createProduct } = require("../controllers/product.controller.js");
const { upload } = require("../settings/upload.config.js");
const router = express.Router();

// Endpoint para crear un producto
router.post("/", upload.single("image"), createProduct);

module.exports = router;