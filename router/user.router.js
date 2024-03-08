const express = require('express');
const userRouter = express.Router();
const path = require('path');
const bodyParser = require('body-parser')
userRouter.use(bodyParser.urlencoded({ extended: false }))


userRouter.get('/user', (req, res) =>{
   // res.sendFile(indexPath);
   res.sendFile(path.join(__dirname, '../view/index.html'))
})


userRouter.post('/user', (req, res) =>{
   const name = req.body.name;
   const age = req.body.age;
   res.send(`Hi, ${name} you are ${age} years old.`)
})

// export
module.exports = userRouter;