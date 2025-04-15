const express = require("express");
const {
  getProductsView,
  getAddProductsView,
  addNewProduct,
  getNewProductView,
  getProductView,
  deleteProduct,
} = require(`../controllers/productsController`);

const router = express.Router();

router.get("/", getProductsView);

router.get("/add", getAddProductsView);

router.post("/add", addNewProduct);

router.get("/new", getNewProductView);

router.get("/:name", getProductView);

router.delete("/:name", deleteProduct);

module.exports = router;
