const mongoose = require("mongoose");
require("dotenv").config();
const LINK = process.env.LINK;

const connectdb = async()=>{
    try{
         await mongoose.connect(LINK);
         console.log("deb is connect");
    }catch{
        console.log("deb is not connect");
    }
}
module.exports= {connectdb};
