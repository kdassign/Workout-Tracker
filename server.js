const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');

const PORT = process.env.PORT || 3001

const app = express();

app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Hw18", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/index.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});