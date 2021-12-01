// express server boilerplate
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 3001;

const { BlogPost } = require("./src/models/blogPost");
const BlogRoutes = require("./src/routes/blog");

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.error(error);
  }
};

connection();

app.use("/blog/", BlogRoutes);

app.listen(port, function () {
  console.log("Server running on port " + port);
});
