var express = require('express');
var mysql = require("mysql");

// TODO: Import your route files from `route/`
var router = require("express").Router()
// Initialize the app and create a port
var app = express();
var PORT = process.env.PORT || 3000;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

var apiRoutes = require("./routes/apiRoutes");
var htmlRoutes = require("./routes/htmlRoutes");
app.use(htmlRoutes);
app.use(apiRoutes);


// Start the server on the port
app.listen(PORT, function() {
  console.log('Listening on PORT: ' + PORT);
});
