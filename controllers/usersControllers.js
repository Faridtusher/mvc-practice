const path = require('path');

const users = require('../models/usersModel')

const usersGet = (req, res) =>{
   res.sendFile(path.join(__dirname,'../views/users.html'))
}

const postUsers = (req, res)=>{
   const name = req.body.name;
   const age = req.body.age;
   const user = {
      name,
      age
   }
   users.push(user)
   res.json({
      users
   })
}

module.exports = {
   usersGet,
   postUsers
}