const path = require('path');
const products = require('../models/productsModel')


exports.getProducts = (req, res) =>{
   res.sendFile(path.join(__dirname, '../views/products.html'))
}

exports.postProducts = (req, res) =>{
   const brand = req.body.brand;
   const price = req.body.price;
   const product = {
      brand,
      price
   }
   products.push(product)
   res.json(products)
}

