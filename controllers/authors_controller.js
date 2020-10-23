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
// res.render("authors/index")
// res.render("authors/new")
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

const getAuthor =  async function (req, res) {
  // getAuthorById(req).exec((err, author) => {
  //   if(err) {
  //     res.status(500);
  //   return res.json({
  //   Error: err.message
  // })
  //   }else {
  //     res.send(author)
  //   }
  // })

  
  try{
    const author = await getAuthorById(req)
    res.send(author.name)

  }catch{
    return res.json({
      Error: "Error creating author"
    })
  }
}

const changeAuthor = async function (req, res) {
  // updateAuthor(req).exec((err, author) => {
  //   if(err){
  //     res.status(500)
  //     return res.json({
  //       Error: err.message
  //     })
  //   }else {
  //     res.send(author)
  //   }
  // })

  try {
const author = await updateAuthor(req)
res.send(author.name)
  }catch{
    return res.json({
      Error: "Error updating author"
    })
  }
} 

const removeAuthor =  async function(req, res) {
  // console.log("removeAuthor", req.params.id)
  // deleteAuthor(req.params.id).exec((err )=> {
  //   if(err){
  //     res.status(500)
  //     return res.json({
  //       Error: err.message
  //     })
  //   }else {
  //     res.sendStatus(200)
  //   }
  // })
try {
  await deleteAuthor(req.params.id)
  res.sendStatus(200)
}catch {
  return res.json({
    Error: "Error deleting author"
  })
}

}
module.exports = {getAuthors, makeAuthor, getAuthor, changeAuthor, removeAuthor};