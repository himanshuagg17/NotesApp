const express=require("express");
const app=express();
require("dotenv").config();

app.get("/",(req,res)=>{
    res.sendFile("frontend/index.html",{root:__dirname}); 
})

app.get("/signup",(req,res)=>{
    res.sendFile("frontend/signup.html",{root:__dirname});
})

app.get("/login",(req,res)=>{
    res.sendFile("frontend/login.html",{root:__dirname});
})

app.listen(process.env.port,()=>{
    console.log(`the server is running at http://localhost:${process.env.port} `)
})