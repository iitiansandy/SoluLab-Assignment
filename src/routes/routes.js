const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController");
const categoryController = require("../controllers/categoryController");


/* ++++++++++++++++++++++++++ Product APIs ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

router.post("/product", productController.createProduct);
router.get("/product", productController.getProduct);
router.put("/product/:productId", productController.updateProduct);
router.delete("/product/:productId", productController.deleteProduct);


/* ++++++++++++++++++++++++++ Category APIs ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

router.post("/category", categoryController.createCategory);
router.get("/category", categoryController.getCategory);
router.put("/category/:categoryId", categoryController.updateCategory);
router.delete("/category/:categoryId", categoryController.deleteCategory);


module.exports = router;