const express = require('express');
const usersRoute = express.Router();
const bodyParser = require('body-parser')
usersRoute.use(bodyParser.urlencoded({ extended: false }))
const { usersGet, postUsers } = require('../controllers/usersControllers')


usersRoute.get('/users', usersGet )
usersRoute.post('/users', postUsers)


// exports
module.exports = usersRoute;