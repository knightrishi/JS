const jwt=require("jsonwebtoken")

const requireAuth = (req,res,next)=>{
    const autheader=req.headers.authorization;

    if(!autheader){
        return res.status(401).json({message:"No token recieved"})
    }
    const parts=autheader.split(" ");
    if(parts.length !=2 || parts[0]!= "Bearer"){
        return res.status(401).json({message:"Invalid authorization format"})
    }
    const token=parts[1];

    try {
        const decd=jwt.verify(token,"BANKAI")
            req.user=decd;
    next();
    } catch (error) {
         return res.status(403).json({ message: "Invalid or expired token" });
    }
    
}

module.exports=requireAuth;