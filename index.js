const {app, port, hostname} = require('./app')

// run the server
app.listen(port, hostname, () =>{
   console.log(`Your server is running in : http://${hostname}:${port}`)
})