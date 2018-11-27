let express = require('express')
let bodyParser = require('body-parser')
let server = express()

//lines 6 through 7 is middleware. 
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(express.static(__dirname + '/public')) //this makes it so your front-end works. Gives the path on your computer that points to your public folder.
//Don't change the above

require("./server-assets/db/mlab-config")

let listitemRoutes = require('./server-assets/routes/listitem-routes')

server.use('/api/listitems', listitemRoutes)

//Catch all
server.get('*', (req, res, next) => {
  res.status(404).send('<h1>NO MATCHING ROUTE</h1>')
})

//Don't change below
server.listen(3000, () => {
  console.log("The server is running on port:", 3000)
})