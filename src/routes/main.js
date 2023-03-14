const express = require("express")

const routes = express.Router()

const Detail = require("../models/Detail")
const Contact = require("../models/contact")
const Slider = require("../models/Slider")
const Footer = require("../models/footer")
const Partner = require("../models/partners")
const Product = require("../models/product")
const Journey = require("../models/journey")


routes.get("/",async(req,res)=>{
    // find the data in the mongoodb 
    const details = await Detail.find();
    const footer = await Footer.find();
    const partner = await Partner.findOne();
    const product = await Product.find();
    const slider = await Slider.find();
    const journey = await Journey.findOne();

    res.render('index',{
        details:details,
        slider:slider,
        footer:footer,
        product:product,
        partner:partner,
        journey:journey,
    })
})



routes.get("/feedback",async(req,res)=>{
    const details = await Detail.find();
    const footer = await Footer.find(); 
    res.render('feedback',{details:details})
})


routes.get("/journey",async(req,res)=>{
    const details = await Detail.find();
    const footer = await Footer.find();
    const journey = await Journey.find();
    res.render('journey',{details:details,data:journey,footer:footer})
}) 



routes.get("/about",async(req,res)=>{
    const details = await Detail.find();
    const footer = await Footer.find();
    res.render('about',{details:details,footer:footer})
}) 


routes.get("/contact",async(req,res)=>{
    const details = await Detail.find();
    const footer = await Footer.find();
    res.render('contact',{details:details,footer:footer})
}) 




// Forms link update 
routes.post("/process-contact-form",async(req,res)=>{
    console.log("Enter in the submition form but not submit")
    
    // if there is problem in req.body then there we have to do is 
    // const bodyParser = require("body-parser")
    // app.use(bodyParser.urlencoded({
    //     extended:true
    // }))
    console.log(req.body)
    
    try{
        const data = await Contact.create(
            req.body
        )
        console.log("form is subminted");
        res.redirect("/")
    }
    catch(e){
        console.log(e);
        res.redirect("/")
    }

})

module.exports = routes