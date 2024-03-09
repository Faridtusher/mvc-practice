const path = require('path');
const contacts = require('../models/contactModel')

// request and response of getContact
exports.getContact  = (req, res) =>{
   res.sendFile(path.join(__dirname,'../views/contact.html'))
}


// request and response of postContact
exports.postContact = (req, res) =>{
   const name = req.body.name;
   const phone = Number(req.body.phone);
  
   const contact = {
      name, phone
   }
   contacts.push(contact)
   res.json({
      contacts
   })
}

