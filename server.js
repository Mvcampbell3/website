const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));

const PORT = process.env.PORT || 8080;


app.get("/", (req, res) => {
    res.sendFile(__dirname, "/index.html")
})

app.listen(PORT, ()=> {
    console.log("Server is live at http://localhost:8080");
})