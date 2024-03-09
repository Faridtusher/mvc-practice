// dependencies
require('dotenv').config();
const express = require('express')
const app = express();
const port = process.env.port || 3001
const hostname = '127.0.0.1'
// finish all dependencies


// get all of the routers
const usersRoute = require('./routes/usersRouter')
const productsRoute = require('./routes/productsRoute')
const contactRoute = require('./routes/contactRoute')
// finish get all of the routers


// create the home page
app.get('/', (req, res) =>{
   res.send('<h2>Home page</h2>')
})


// call the imported routes
app.use(usersRoute)
app.use(productsRoute)
app.use(contactRoute)
// call the imported routes


// not found page
app.use((req, res) =>{
   res.send('<h2>404 !!! Not found</h2>')
})


// export
module.exports = {
   app,
   port,
   hostname
}