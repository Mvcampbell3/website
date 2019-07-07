const express = require("express");
const router = express.Router();
const path = require("path")
const db = require("../models")

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
})

router.get("/secret", (req,res) => {
  res.sendFile("secret")
})

router.post("/api/message", (req, res) => {
  console.log(req.body);
  const newMessage = new db.Message({
    name: req.body.name,
    email: req.body.email,
    message: req.body.text
  })
  newMessage.save()
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.json(err)
    })
})

router.get("/api/all", (req, res) => {
  db.Message.find().then(result => { res.json(result) }).catch(err => res.json(err));
})

router.post("/api/secretpage", (req,res) => {
  if (req.body.pin === "1234") {
    res.json(true)
  } else {
    // res.redirect("/")
    res.redirect("/")
  }
})

module.exports = router;