// Importing the Product model
const Product = require('../models/product');

// Function to create and add a new product
module.exports.createAddProduct = async function(req, res) {
    try {
        // Creating a new product
        let createProduct = await Product.create({
            name: req.body.name,
            quantity: req.body.quantity
        });

        // Saving the created product
        await createProduct.save();

        // Responding with success message and created product data
        return res.status(200).json({
            data: {
                Product: {
                    name: createProduct.name,
                    quantity: createProduct.quantity
                }
            },
            message: "New Product Created and added"
        });

    } catch (error) {
        console.log("Error:", error);
        // Responding with error message
        return res.status(500).json({
            message: "Error in adding new created product"
        });
    }
};

// Function to get all products data
module.exports.getproductsData = async function(req, res) {
    try {
        // Finding all products
        let product = await Product.find({});

        // Processing product data
        const processedProducts = product.map((product, index) => ({
            id: product.id,
            name: product.name,
            quantity: product.quantity
        }));

        // Responding with processed product data
        return res.status(200).json({
            data: {
                Products: processedProducts,
            }
        });

    } catch (error) {
        console.log("Error:", error);
        // Responding with error message
        return res.status(500).json({
            message: "Error in fetching all products"
        });
    }
};

// Function to delete a product by ID
module.exports.deleteProduct = async function(req, res) {
    try {

        // Finding product by ID
        let product = await Product.findById(req.params.id);

        // If product is not found
        if (!product) {
            // Throws an Error
            return res.status(404).json({
                message: "Product is not found"
            });
        }

        // Deleting the product with particular ID
        let deletedProduct = await product.deleteOne();

        // Responding with success message and deleted product data
        return res.status(200).json({
            data: {
                product: {
                    id: deletedProduct.id,
                    name: deletedProduct.name,
                    quantity: deletedProduct.quantity
                }
            },
            message: "Product is successfully deleted"
        });

    } catch (error) {
        console.log("Error:", error);
        // Responding with error message
        return res.status(500).json({
            message: "Error in deleting a product"
        });
    }
};

// Function to update product quantity by ID
module.exports.updateQuantity = async function(req, res) {
    try {
        // Parsing update quantity from request query parameter
        let update_quantity = parseInt(req.query.number, 10);
        // Checking if update quantity is a valid number
        if (Number.isNaN(update_quantity))
            return res.status(400).json({
                message: "Please enter a Number to update quantity of product"
            });

        // Finding product by ID
        let product = await Product.findById(req.params.id);
        // If product is not found
        if (!product)
            return res.status(404).json({
                message: "Product not found!!"
            });

        // Updating product quantity
        product.quantity += update_quantity;
        let updatedProduct = await product.save();

        // Responding with success message and updated product data
        return res.status(200).json({
            data: {
                product: {
                    id: updatedProduct.id,
                    name: updatedProduct.name,
                    quantity: updatedProduct.quantity
                }
            },
            message: "Product is successfully updated"
        });
    } catch (error) {
        console.log("Error:", error);
        // Responding with error message
        return res.status(500).json({
            message: "Error in updating quantity of product"
        });
    }
};
