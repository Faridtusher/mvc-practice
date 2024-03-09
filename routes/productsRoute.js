const express = require('express')
const productsRoute = express.Router();
const bodyParser = require('body-parser')
productsRoute.use(bodyParser.urlencoded({ extended: false }))

// get the imported file from controller
const {getProducts, postProducts} = require('../controllers/productsController');

// finish to get the imported file from controller

productsRoute.get('/products', getProducts )
productsRoute.post('/products', postProducts)


// exports
module.exports = productsRoute;