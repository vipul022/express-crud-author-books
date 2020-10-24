const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Book = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  published_date: {
    type: String,
    required: true
  },
  create_date: {
    type: String,
    required: true,
    default: Date.now
  },
  // ! THis is referencing Author object id in books collection
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Author" 
    // !here were are referencing Author model
  }
  
  })


module.exports = mongoose.model("Book", Book);