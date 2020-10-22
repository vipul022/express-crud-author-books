const express = require("express");
const router = express.Router();

const {getAuthors, makeAuthor, getAuthor, changeAuthor, removeAuthor }   = require("../controllers/authors_controller.js");
const Author = require("../models/author.js");
  // getAuthor, 
  // makeAuthor, 
  // changeAuthor, 
  // removeAuthor} 


router.get("/", getAuthors);

router.get("/new", (req,res) => {
  res.render("authors/new", {author: new Author()})
})
router.get("/:id", getAuthor)

router.post("/", makeAuthor)

router.put("/:id", changeAuthor);

router.delete("/:id", removeAuthor);


module.exports = router;