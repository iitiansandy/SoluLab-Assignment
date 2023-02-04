const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController");
const categoryController = require("../controllers/categoryController");


/* ++++++++++++++++++++++++++ Product APIs ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

router.post("/product", productController.createProduct);
router.get("/product/:productId", productController.getProductbyId);
router.get("/product", productController.getProduct);
router.put("/product/:productId", productController.updateProductbyId);
router.delete("/product/:productId", productController.deleteProductbyId);


/* ++++++++++++++++++++++++++ Category APIs ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

router.post("/category", categoryController.createCategory);

module.exports = router;