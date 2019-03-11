const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));

const PORT = process.env.PORT || 7000;


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
})

app.get("/portfolio", (req,res) => {
    res.sendFile(path.join(__dirname, "/public/portfolio.html"))
})



app.listen(PORT, ()=> {
    console.log("Server is live at http://localhost:7000");
})