const mongoose = require("mongoose");

const connectdb = async()=>{
    try{
         await mongoose.connect("mongodb+srv://tanmaysawaji:Pune123456789@cluster0.dz2yolk.mongodb.net/hungryhub");
         console.log("deb is connect");
    }catch{
        console.log("deb is not connect");
    }
}
module.exports= {connectdb};
