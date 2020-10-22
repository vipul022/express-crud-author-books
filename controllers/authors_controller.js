const {getAllAuthors, addAuthor,  getAuthorById, updateAuthor, deleteAuthor } = require("../utils/authors_utilities")

const getAuthors = async function (req, res) {
// getAllAuthors(req)
// .exec((err, authors)=> {
//   if(err){
//     res.status(500);
//     return res.json({
//     Error: err.message
//   })

// } else {
//     res.send(authors)
//   }

// })
try{
const authors = await getAllAuthors(req)
res.send(`Authors: ${authors}`)
}catch{
  return res.json({
    Error: "Error finding authors"
  })
}


}

const makeAuthor = async function (req, res) {
  // ! save function takes a callback with err and author as parameter
  // addAuthor(req).save((err, author) => {
  //   if(err){
  //     res.status(500);
  //     return res.json({
  //       Error: err.message
  //     })
  //   }else{
  //     res.send(author)
  //   }
  // })
try{
  const newAuthor = await addAuthor(req).save()
  // console.log("newAuthor=>", newAuthor)
  res.send(newAuthor.name)
}catch{
return res.json({
        Error: "Error creating author"
      })
}

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

const removeAuthor = function(req, res) {
  console.log("removeAuthor", req.params.id)
  deleteAuthor(req.params.id).exec((err )=> {
    if(err){
      res.status(500)
      return res.json({
        Error: err.message
      })
    }else {
      res.sendStatus(200)
    }
  })
}
module.exports = {getAuthors, makeAuthor, getAuthor, changeAuthor, removeAuthor};