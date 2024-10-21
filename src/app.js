const express = require("express");
const productRoutes = require("./routes/product.routes.js");
const errorHandler = require("./middlewares/error.handle.js");
const app = express();
const PORT = process.env.PORT || 3000;
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

// Rutas
app.use("/products", productRoutes);

// Middleware de manejo de errores
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});