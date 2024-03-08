require('dotenv').config();
const express = require('express')
const app = express();
const port = process.env.port || 3001
const hostname = '127.0.0.1'
const userRouter = require('./router/user.router')


app.use(userRouter)





// create the home page
app.get('/', (req, res)=>{
   res.send('<h2>Home page</h2>')
})


// create the home page
app.use( (req, res)=>{
   res.status(404).json({
      message:'Not found page'
   })
})

// export
module.exports = {
   app,
   port,
   hostname
}