const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":String,
        "dob":String,
        "bldgrp":String,
        "mobno":String,
        "address":String,
        "pin":String,
        "dist":String,
        "place":String,
        "email":String,
        "username":String,
        "password":String,
    }    
)
let usermodel=mongoose.model("users",schema)
module.exports={usermodel}