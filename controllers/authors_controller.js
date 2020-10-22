const {getAllAuthors, addAuthor,  getAuthorById, updateAuthor } = require("../utils/authors_utilities")

const getAuthors = function (req, res) {
getAllAuthors(req)
.exec((err, authors)=> {
  if(err){
    res.status(500);
    return res.json({
    Error: err.message
  })

} else {
    res.send(authors)
  }

})

}

const makeAuthor = function (req, res) {
  addAuthor(req).save((err, author) => {
    if(err){
      res.status(500);
      return res.json({
        Error: err.message
      })
    }else{
      res.send(author)
    }
  })
}

const getAuthor = function (req, res) {
  getAuthorById(req).exec((err, author) => {
    if(err) {
      res.status(500);
    return res.json({
    Error: err.message
  })
    }else {
      res.send(author)
    }
  })
}

const changeAuthor = function (req, res) {
  updateAuthor(req).exec((err, author) => {
    if(err){
      res.status(500)
      return res.json({
        Error: err.message
      })
    }else {
      res.send(author)
    }
  })
}
module.exports = {getAuthors, makeAuthor, getAuthor, changeAuthor};