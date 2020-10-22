
const Author = require("../models/author")

const getAllAuthors = function(req) {
return Author.find();

}

const addAuthor = function(req) {
  console.log("req.body=>", req.body)
  return new Author(req.body);
}

const getAuthorById = function(req) {
  // console.log("req.body=>", req.body)
  return Author.findById(req.params.id)
}

const updateAuthor = function (req) {
    //!the below method takes 3 arguments id, document object properties to be modified and option new:true  which returns the post document after modification, by default it returns document prior to modification
  return Author.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
}

const deleteAuthor = function(id) {
  console.log("deleAuthor", id)
  return Author.findByIdAndRemove(id)
}
module.exports = {getAllAuthors, addAuthor, getAuthorById, updateAuthor, deleteAuthor }