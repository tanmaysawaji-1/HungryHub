const userModel = require("../models/usermodel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator");

// login user
const loginUser = async (req,res) => {

}


// register user
const registerUser = async (req, res) => {
    const {name, password, email} = req.body;
    try{
        // Checking is user already exist
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false, message:"User already exists"});
        }
        // validating email format & stron password
        if(!validator.isEmail(email)){
            return res.json({success:false, message:"Please enter a valid email address"});
        }

        if(password.length<8){
            return res.json({success:false, message:"Please enter a strong passward"});
        }
    }catch(error){

    }
}

module.exports = {loginUser, registerUser};