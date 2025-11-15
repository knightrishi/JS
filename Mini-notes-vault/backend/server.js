const express=require("express")
const fs=require("fs")
const app=express();
const { connectingMongoDB }=require("./db")

connectingMongoDB("mongodb://127.0.0.1:27017/mini-notes-vault").then(()=>{
    console.log("DB Connected")
})

 
const PORT=7070







app.listen(PORT, ()=>{
    console.log("SERVER STARTED")
})