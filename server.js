const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html'] }));

app.use(routes)

const PORT = process.env.PORT || 3000;

const dbase = "portfolio"

mongoose
  .connect(process.env.MONGODB_URI || `mongodb://localhost/${dbase}`, { useNewUrlParser: true })
  .then(() => {
    console.log("mongo connected")
  });

app.listen(PORT, function() {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});