const express = require("express")
const app = express()
const mongoose = require("mongoose")
const routes = require('./routes/main')
const hbs = require('hbs')
// const detail = require("./models/Detail")
// const Slider = require("./models/Slider")
// const Footer = require("./models/footer")
// const Product = require("./models/product")
// const Journey = require("./models/journey")


// order to be maintain
// it en code the data to incripted formate
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({
    extended:true
}))

// we can use public resource in public 
// all the main route is in the file router 
app.use("/static",express.static('public'))
app.use("",routes)


// making the default hbs (if any one save the file without hbs then it recongnize is as hbs automatic)
// it is going to find the file in tht views folder 
app.set("view engine",'hbs')
app.set('views','views')
// mongoose.set('strictQuery', true);

// it is help in use of navbar templet   "  {{>navbar}}  " <<-- this funtion
hbs.registerPartials("views/partials")


mongoose.connect('mongodb://127.0.0.1:27017/website_tut',()=>{
    console.log("db connect");
    console.log("this is the app.js db is running fine");
})




app.listen(5511 | process.env.PORT,()=>{
    console.log(`sever started ${5511}`);
})