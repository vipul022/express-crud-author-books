const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const authorRouter = require("./routes/author_routes.js")
const PORT = 3000

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

const dbConn = "mongodb://localhost/library_app";

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

app.listen(PORT, () => {
console.log(`listening to localhost: ${PORT}`)
})