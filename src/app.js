const express = require("express")
const app = express()
const mongoose = require("mongoose")
const routes = require('./routes/main')
const hbs = require('hbs')
const path = require('path')

// order to be maintain
// it en code the data to incripted formate
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({
    extended:true
}))

// we can use public resource in public 
// all the main route is in the file router 
app.use("/static",express.static(path.join(__dirname, '../public')))


// making the default hbs (if any one save the file without hbs then it recongnize is as hbs automatic)
// it is going to find the file in tht views folder 
app.set('view engine', 'hbs')
app.set('views',path.join(__dirname, '/views'))
// mongoose.set('strictQuery', true);

// it is help in use of navbar templet   "  {{>navbar}}  " <<-- this funtion
hbs.registerPartials(path.join(__dirname, "views/partials"))
// console.log(path.join(__dirname, "views/partials"));
app.use("",routes)



mongoose.connect('mongodb://127.0.0.1:27017/website_tut',()=>{
    console.log("db connect hello my friends ");
    console.log("this is the app.js dp is running fine");
   
})


let port = 5000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
