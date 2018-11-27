//YOU ARE CREATING AN API HERE!!!!!!!!!
//Create an instance of the router object
const router = require('express').Router() //bring back an instance of the router
//imports listitem schema (which is a database model)
let Listitem = require('../models/listitem')

//Console Logger
router.get('/', (req, res, next) => {
  console.log("ho ho ho")
  //allows request to continue
  next()
})

//GET ALL List items
router.get('/', (req, res, next) => {
  //Utilizes mongoose to find all listitem objects
  Listitem.find({})
    //listitem below is a response array from database of all home objects
    .then(listitem => {
      //return to client
      res.send(listitem)
    })
    .catch(err => {
      //if something break on the request 
      res.status(400).send(err)
    })
})

//GET Listitem BY ID return first id that matches
router.get('/:id', (req, res, next) => {
  //req.params comes from the request url. the value is appended to whatever comes at that section of the url. in this case its after the forward slash...
  Listitem.findById(req.params.id)
    .then(listitem => {
      res.send(listitem)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//CREATE/POST Listitem
router.post('/', (req, res, next) => {
  //req.body (whoever sent the request attached a boy w/ data)is the data from the client 
  Listitem.create(req.body)
    .then(item => {
      return res.send(item)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})


//EDIT List item /api/listitems/:id
router.put('/:listitemId', (req, res, next) => {
  Listitem.findByIdAndUpdate(req.params.listitemId, req.body, { new: true })
    .then(listitem => {
      res.send(listitem)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})



//DELETE Listitem
router.delete('/:id', (req, res, next) => {
  Listitem.findByIdAndDelete(req.params.id)
    .then(deletedListitem => {
      res.send('Deleted')
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//same as export default
//So you have access to this router elsewhere... you need to require it on your index.js
module.exports = router