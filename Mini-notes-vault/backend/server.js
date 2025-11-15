const express=require("express")
const fs=require("fs")
const app=express();
const { connectingMongoDB }=require("./db");
const { json } = require("stream/consumers");

connectingMongoDB("mongodb://127.0.0.1:27017/mini-notes-vault").then(()=>{
    console.log("DB Connected")
})

app.use(express.json())//.use is the middleware loader Middleware is just a function that sits between the request and the response.

app.get("/", (req,res)=>{
    res.send("Mini Notes Vault API running...")
})
 
const PORT=7070







app.listen(PORT, ()=>{
    console.log("SERVER STARTED")
})