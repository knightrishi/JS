const express=require("express")
const authRoute=require("./routes/authRoutes")
const notesRoute=require("./routes/notesRoute")
const app=express();
const { connectingMongoDB }=require("./db");


connectingMongoDB("mongodb://127.0.0.1:27017/mini-notes-vault").then(()=>{
    console.log("DB Connected")
})

app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/notes", notesRoute);


//.use is the middleware loader Middleware is just a function that sits between the request and the response.

app.get("/", (req,res)=>{
    res.send("Mini Notes Vault API running...")
})
// console.log("Loaded Routes:", authRoute);

const PORT=7070







app.listen(PORT, ()=>{
    console.log("SERVER STARTED on PORT",PORT)
})