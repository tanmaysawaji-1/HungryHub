const {foodModel} = require("../models/foodmodel");
const fs = require("fs");


// add food item

const addFood = async(req, res)=>{

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,    
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category:req.body.category
    })

    try{
        await food.save();
        res.json({success:true, message:"Food Added"})
    }catch(error){
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

// all food list
const listFood = async (req, res) =>{

    try{
        const foods = await foodModel.find({});
        res.send({sucess:true,data:foods});
    }catch(error){
        console.log(error);
        res.json({sucess:false, message:"Error"});
    }
}


// remove food item 
const removeFood = async (req, res)=>{
    try{
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{});
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"});
    }catch(err){
        console.log(err);
        res.json({success:true,message:"Error"});
    }
}

module.exports = {addFood,listFood,removeFood};
