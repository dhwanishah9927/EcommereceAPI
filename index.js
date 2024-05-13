// Importing necessary libraries
const express = require('express');
const database = require('./config/mongoose');

// Creating an Express server instance
const server = express();
const port = 4000;

// Middleware to enable parsing data from URLs
server.use(express.urlencoded({ extended: true }));

// Routing configuration
server.use('/', require('./routes/productRoutes'));

// Starting the server and listening on specified port
server.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
