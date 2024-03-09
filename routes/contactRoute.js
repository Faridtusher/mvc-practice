const express = require('express')
const contactRoute = express.Router();
const bodyParser = require('body-parser')
contactRoute.use(bodyParser.urlencoded({ extended: false }))

// get the file from controller
const {getContact, postContact} = require('../controllers/contactController')


// create the routers
contactRoute.get('/contact', getContact)
contactRoute.post('/contact', postContact)


// export
module.exports = contactRoute;