const express = require("express");
const router = express.Router();

const {getAuthors, makeAuthor, getAuthor, changeAuthor }   = require("../controllers/authors_controller.js")
  // getAuthor, 
  // makeAuthor, 
  // changeAuthor, 
  // removeAuthor} 


router.get("/", getAuthors);

router.get("/:id", getAuthor)

router.post("/", makeAuthor)

router.put("/:id", changeAuthor);

// router.delete("/:id", removeAuthor);


module.exports = router;