var express=require("express");
var router=express.Router();

const apes=[
    {
        model:"#14324",
        price:"$750",
        imgUrl:"/static/images/ape_1.png"
    },
    {
        model:"#44353",
        price:"$1070",
        imgUrl:"/static/images/ape_2.png"
    },
    {
        model:"#92367",
        price:"$620",
        imgUrl:"/static/images/ape_3.png"
    },
    {
        model:"#74323",
        price:"$710",
        imgUrl:"/static/images/ape_4.png"
    },
    {
        model:"#14320",
        price:"$9999",
        imgUrl:"/static/images/ape_5.png"
    },
    {
        model:"#54321",
        price:"$750",
        imgUrl:"/static/images/ape_6.png"
    },
    {
        model:"#83323",
        price:"$350",
        imgUrl:"/static/images/ape_7.png"
    },
    {
        model:"#54113",
        price:"$520",
        imgUrl:"/static/images/ape_8.png"
    },
    {
        model:"#78463",
        price:"$1050",
        imgUrl:"/static/images/ape_9.png"
    },
    {
        model:"#64594",
        price:"$350",
        imgUrl:"/static/images/ape_10.png"
    },
    {
        model:"#23477",
        price:"$520",
        imgUrl:"/static/images/ape_11.png"
    },
    {
        model:"#98121",
        price:"$1050",
        imgUrl:"/static/images/ape_12.png"
    }

]

const credential={
    user:"chmubarak",
    password:"123"
}
//login user
router.post("/login",(req,res)=>{
    if(req.body.userName===credential.user&&req.body.password===credential.password){
        req.session.user=req.body.userName
        res.redirect("/route/home")
    }
    else{
        res.render("base",{login:"invalid username"})
    }
})

//router for home
router.get("/home",(req,res)=>{
    if(req.session.user){
        res.render("home",{apes:apes})
    }
    else{
        // res.send("unauthersized user")
        res.redirect("/")
    }
})

//route for logout
router.get("/logout",(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send("Error")
        }
        else{
            res.render("base",{logout:"logout Successfully"})
        }
    })
})
module.exports=router