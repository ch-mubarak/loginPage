const express=require("express");
const path=require("path")
const app=express();
const bodyParser=require("body-parser")
const session=require("express-session");
const cookies=require("cookie-parser")
const router =require("./router");

app.set("view engine","ejs")

//load static items
app.use("/static",express.static(path.join(__dirname,"public")))

app.use(bodyParser.urlencoded({extended:true}))

app.use(session({
    secret:"secret",
    resave:true,
    saveUninitialized:true,

}))

app.use("/route",router)

//home route
app.get("/",(req,res)=>{
    res.render("base")
})




app.listen(3000,()=>console.log("server up on port 3000"))