const express = require('express');
const app = express();

let port = 3000;

app.listen(port, ()=>{
    console.log(`Running port ${port}`);
});


let i = 0;
// app.use((req,res) =>{
//     console.log(`Yo amigos ${i++}`);
//     res.send(`Yo ${i*2}`);
// });

app.get("/home", (req,res) =>{
    console.log(`Yo amigo on home ${i++}`);
    res.send(`Yo amigo en casa ${i*2}`);
});
app.get("/food", (req,res) =>{
    console.log(`Yo amigo on food ${i++}`);
    res.send(`Que comes hoy? ${i*2}`);
});
app.get("/walk", (req,res) =>{
    console.log(`Yo amigo on walk ${i++}`);
    res.send(`Tu caminas? ${i*2}`);
});

app.get("/sleep", (req,res) =>{
    console.log(`Yo amigo on sleep ${i++}`);
    res.send(`Tu dormir? ${i*2}`);
});

//Path Parameter
app.get("/:username/:id", (req,res) =>{
    console.log("req");
    let {username,id} = req.params; 
    res.send(`your username is ${username} and id is ${id} .`);
});


app.get("/search", (req,res) =>{
    let {q} = req.query;
    console.log(req.query); 
    res.send(`NO RESULT!!!!!! for ${q}`);
});

