const mongoose = require("mongoose")

const Partners = mongoose.Schema(
    {
        image1:String,
        image2:String,
    },
);

module.exports = mongoose.model("partners",Partners);