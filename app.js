const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
var exphbs  = require('express-handlebars');
const app = express();
require("dotenv").config();


const authorRouter = require("./routes/author_routes.js")
const bookRouter = require("./routes/books_routes.js")
const PORT = 3000

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
//! MIDDLEWARE
//* Cors  
app.use(cors());
//* express.json()
app.use(express.json())
//* express.urlEncoded()
app.use(
  express.urlencoded({
    extended: true,
  })
);

const dbConn = process.env.MONGODB_URI || "mongodb://localhost/library_app";

mongoose.connect(
  dbConn,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) {
      console.log("Error connecting to database", err);
    } else {
      console.log("Connected to database!");
    }
  }
);


app.use("/authors", authorRouter);
app.use("/books", bookRouter)
app.listen(PORT, () => {
console.log(`listening to localhost: ${PORT}`)
})