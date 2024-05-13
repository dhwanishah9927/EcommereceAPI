// Creating a database to store products
const mongoose = require('mongoose');

// Connecting the database
mongoose.connect("mongodb+srv://dhwanishah9927:scI30CqjOXht3HKb@cluster0.hhsgtmw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const database = mongoose.connection;

// if connection is unsuccessfull
database.on('error',console.error.bind(console,"Error connecting to MongoDB"));


//if connection is succesfull
database.once('open',function(){
    console.log("Connected to Database : MongoDB");
});

module.exports = database;
