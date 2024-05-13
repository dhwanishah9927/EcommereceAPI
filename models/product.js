// Importing Mongoose
const mongoose = require('mongoose');


// Create a Schema for the product
const productsSchema = new mongoose.Schema({
        name : {
            type : String,
            required: true
        },
        quantity: {
            type : Number,
            required: true
        }
});


// model with the created schema
const Product = mongoose.model("Product",productsSchema);

// Export a model
module.exports = Product;