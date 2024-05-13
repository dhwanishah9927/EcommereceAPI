// Importing the Express framework
const express = require('express');

// Creating a router for handling routes
const router = express.Router();

// Importing the product controller to manage product-related operations
const productController = require('../controllers/productController');

// Route to create a new product
router.post('/products/create', productController.createAddProduct);

// Route to fetch all products
router.get('/products', productController.getproductsData);

// Route to delete a product by its ID
router.delete('/products/:id', productController.deleteProduct);

// Route to update the quantity of a product by its ID
router.post('/products/:id/update_quantity', productController.updateQuantity);

// Exporting the router for use in other modules
module.exports = router;
