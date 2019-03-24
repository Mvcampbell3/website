const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = require("./models");


app.use(express.static("public"));

const PORT = process.env.PORT || 7000;


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
})

app.post("/api/message", (req,res) => {
  db.Message.create({
    name: req.body.name,
    email: req.body.email,
    text: req.body.text
  }).then(result => {
    res.json(result);
  })
})

app.get("/api/all", (req,res) => {
  db.Message.findAll({}).then(result => {res.json(result)});
})

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});