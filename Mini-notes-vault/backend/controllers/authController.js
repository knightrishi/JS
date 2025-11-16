const User=require("../models/User")

const bcrypt = require("bcryptjs");

const jwt=require("jsonwebtoken")

const registerUser = async (req,res) =>
    {
        try {
            
            const {name,email,password}=req.body

            if(!name || !email || !password){
                return res.status(400).json({message :"PLEASE FILL ALL THE REQUIRED FIELDS"})
            }

            const existingUser=await User.findOne({email});//returns ONLY ONE document
            if(existingUser){
                return res.status(400).json({message :"This Email is already registered"})
            }

            const hashedPass=await bcrypt.hash(password,10)
            //the 10 …is called the salt rounds (or cost factor).
            // It means:
            // “Repeat the hashing process 2^10 = 1024 times.”

            const newUser=await User.create({
                name,
                email,
                password:hashedPass,
            });
            return res.status(201).json({message:"User is registerd successfully",
                user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
            },
            });


        } catch (err) {
              console.log(err);
        res.status(500).json({ message: "Server error" });
     }
 }


 const loginUser=async (req,res)=>{
    try {
        const {name,email,password}=req.body
        const user=await User.findOne({email});
          if(!user){
                return res.status(400).json({message :"This User is not registered"})
            }
            const isMatch=await bcrypt.compare(password,user.password)

            if(!isMatch){
                return res.status(400).json({message:"Wrong Password"})
            }

            const token=jwt.sign({id:user._id},"BANKAI",{expiresIn:"1d"})
             //Creates a payload-{ id: user._id } (the data inside the token)
             // Signs it with a secret-BANKAI(The Signature) so nobody can tamper with it
             // Sets an expiry so it isn't valid forever

             return res.json({
            message: `Welcome Back User ${user.email}`,
            token,
        });
    } catch (err) {
         console.log(err);
        res.status(500).json({ message: "Server error" });
    }
 }

 module.exports = { registerUser, loginUser };