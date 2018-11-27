let mongoose = require('mongoose')
let Schema = mongoose.Schema

//Schema defined below
let schema = new Schema({
  item: { type: String, required: true, minlength: 3, maxlength: 100 },
  url: { type: String, required: true },
  price: { type: Number, required: true }
})

//This converts your schema into something that can be queried or found. Schema defines the rules of the data type. 
module.exports = mongoose.model("Listitem", schema)