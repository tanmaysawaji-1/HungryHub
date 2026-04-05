const express = require('express');
const cors = require('cors');
const {connectdb} = require('./config/db');
const foodRouter = require('./routes/foodroute');
const userRouter = require('./routes/userroute');

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

connectdb();

// api endpoints

app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'));
app.use("/api/user",userRouter);


app.get("/",(req, res)=>{
    res.send("hello");
})

app.listen(port,()=>{
    console.log("server is running at "+port);
})