
const Author = require("../models/author")

const getAllAuthors = function(req) {

  let searchOptions = {}
  console.log("req.query.name", req.query.name)
  if (req.query.name !== null && req.query.name !== ""){
    searchOptions.name = new RegExp(req.query.name, "i")
  }
  //! RegExp search for the part of the text that is passed as query and "i" makes the query string case insensitive
return Author.find(searchOptions);

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
  // console.log("deleAuthor", )
  return Author.findByIdAndRemove(id)
}
module.exports = {getAllAuthors, addAuthor, getAuthorById, updateAuthor, deleteAuthor }