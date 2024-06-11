const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
app.use(cors())
app.use(express.json())
const {usermodel}=require("./models/User")

mongoose.connect("mongodb+srv://Chandanapk:vishnuchandu1357@cluster0.bemah3y.mongodb.net/userDB?retryWrites=true&w=majority&appName=Cluster0")
app.post("/add",(req,res)=>{
    let input=req.body
    let user=new usermodel(input)
    console.log(user)
    res.json({"status":"success"})
    user.save()

})


app.get("/viewall",(req,res)=>{
    usermodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})


app.listen(8086,()=>{
    console.log("server started")
})