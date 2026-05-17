const {orderModel} = require("../models/orderModel");
const userModel  = require("../models/usermodel");
const Stripe = require("stripe");
require('dotenv').config();
const mongoose = require("mongoose");


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// placing user order for frontend
const placeOrder = async (req, res) => {
    // Validate required fields
    if (!req.body.userId || !req.body.items || !req.body.amount || !req.body.address) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const frontend_url = process.env.FRONTEND_URL || "http://localhost:5173";

    try{
        const newOrder = new orderModel({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address
        })
        const line_items = req.body.items.map((item)=>({
            price_data:{
                currency:"inr",
                product_data:{
                 name:item.name
                },
                unit_amount:item.price*100 // Stripe expects paise for INR
            },
            quantity:item.quantity
        }))
        line_items.push({
            price_data:{
                currency:"inr",
                product_data:{
                    name:"Delivery Charges"
                },
                unit_amount:2*100 // 2 rupees delivery charge
            },
            quantity:1
        })

        const session = await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:'payment',
            success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});
        res.json({success:true,session_url:session.url});
    }catch(err){
        console.error("PlaceOrder error:", err);
        res.status(500).json({success:false,message: err?.message || "Unknown error"});
    }
}

const verifyOrder = async (req, res) =>{
    const {orderId , success} = req.body;
    try{
        if(success == "true"){
            await orderModel.findByIdAndUpdate(orderId,{payment:true});
            res.json({success:true,message:"Paid"});
        }else{
            await orderModel.findByIdAndDelete(orderId);
            res.json({success:false,message:"Not Paid"})
        }

    }catch(err){
        console.log(err);
        res.json({success:false,message:"Error"});
    }
}

// user orders for frontend
const userOrders = async (req, res) => {
    try{
        const orders = await orderModel.find({userId:req.body.userId});
        res.json({success:true,data:orders});
    }catch(err){
        console.log(err);
        res.json({success:false, message:"Error"});
    }
}

// Listing orders for admin panel
const listOrders = async (req, res) => {
    try{
        const orders = await orderModel.find();
        res.json({success:true,data:orders});
    }catch(err){
        console.log(err);
        res.json({success:false,message:"Error"});
    }
}

// api for updating order status
const updateStatus = async (req, res) => {
    try{
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
        res.json({success:true,message:"Status Updated"});
    }catch(err){
        console.log(err);
        res.json({success:false,message:"Error"});
    }
}

module.exports = {placeOrder,verifyOrder,userOrders,listOrders,updateStatus};