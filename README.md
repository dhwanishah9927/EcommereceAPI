# EcommereceAPI

E-commerce API, developed with Node.js, Express.js, and MongoDB, helps admin to oversee their product inventory. 
It enables them to add new products, check existing products' inventory, remove products based on their unique identifiers, and modify product quantities seamlessly.

# Tech Stack:
- Node.js
- Express.js
- MongoDB

# Functionality:
1. Create Products: 
      The API provides endpoints for adding fresh entries of product details to the inventory. Admins specify product information like the name and quantity.

2. View products Inventory: 
      The API endpoint designed for accessing the product inventory, and giving adminis the ability to fetch all currently available products.

3. Delete Product: 
      The API endpoint for removing a particular product from the inventory, using its unique identifier as a reference.

4. Update Quantity of Products: 
      The API for admins to adjust the quantity of a product within the inventory. Adminis specifies the ID of product and the new quantity to update the quantity of product.

# Setup

Clone the repository:

      git clone https://github.com/dhwanishah9927/EcommereceAPI.git 

Install dependencies:

      npm install

   After cloning, and installing dependencies serve the app using "node index". 
   
   The API endpoints are provided from Postman as below: http://localhost:4000

# API ENDPOINTS

1. Create Products:

   `POST` request.

   /products/create

   http://localhost:4000/products/create

   Response:

                        {
                        "data": {
                           "Product": {
                                 "name": "laptop",
                                 "quantity": 201
                           }
                        },
                        "message": "New Product Created and added"
                     }

2. View products Inventory: 

   `GET` request.
   
   /products

   http://localhost:4000/products 

   Response:

                        {
                        "data": {
                           "Products": [
                                 {
                                    "id": "6642401999e07fd561e649bf",
                                    "name": "mouse",
                                    "quantity": 200
                                 },
                                 {
                                    "id": "66427b3169cf390056a2e455",
                                    "name": "laptop",
                                    "quantity": 201
                                 }
                           ]
                        }
                     }
   
3. Delete Products:
  
   `DELETE` request.
  
   /products/:id

   http://localhost:4000/products/6642401999e07fd561e649bf

   Response:

                        {
                        "data": {
                           "product": {
                                 "id": "6642401999e07fd561e649bf",
                                 "name": "mouse",
                                 "quantity": 200
                           }
                        },
                        "message": "Product is successfully deleted"
                     }
    
4. Update Quantity of Products:

   `POST` Request.
   
   /products/:id/update_quantity?number=100

   http://localhost:4000/products/66427b3169cf390056a2e455/update_quantity?number=99

   Response:

                        {
                        "data": {
                           "product": {
                                 "id": "66427b3169cf390056a2e455",
                                 "name": "laptop",
                                 "quantity": 300
                           }
                        },
                        "message": "Product is successfully updated"
                     }
    
   
## Folder Structure
   
```
Ecommerce-API
    |--->config------->|--->mongoose.js
    |              
    |
    |                  
    |--->controllers-->|--->productController.js    
    |
    |--->models------->|-->product.js             
    |                  
    |--->routes------->productRoutes.js
    |
    |
    |--> index.js
    |--> package-lock.json
    |-->package.json
    
 ````


