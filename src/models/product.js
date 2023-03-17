const mongoose = require("mongoose")

const Product = mongoose.Schema(
   {
        imageUrl:String,
        title:String,
        para:String,
        class:String,
        bigPara:String,
    },
)

module.exports = mongoose.model("product",Product);

