const express = require("express");
const path = require("path");
const app = express();

let port = 3000;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));

app.get("/ig/:user" , (req,res)=> {
    let {user} = req.params;
    const indata = require("./data.json");
    console.log(indata[user]);
    res.render("insta.ejs" , {data : indata[user]});
});

app.get("/rolldice" ,(req,res) => {
    let n = Math.floor(Math.random()*6+1);
    res.render("rollDice.ejs" , {num : n});
    console.log(n);
});

app.get("/" ,(req,res) => {
    res.render("home.ejs");
});

app.listen(port, () => {
    console.log(`Ruuning ${port}`)
});