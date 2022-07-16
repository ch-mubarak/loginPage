const express=require("express");
const app=express();
const bodyParser=require("body-parser")
const session=require("express-session");
const cookieParser=require("cookie-parser")
const router =require("./router");

app.set("view engine","ejs")

//load static items
app.use(express.static("public"))
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser());
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