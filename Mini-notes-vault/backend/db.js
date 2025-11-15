const mongoose=require("mongoose")

async function connectingMongoDB(url){
return mongoose.connect(url);

}

module.exports={
connectingMongoDB,
}