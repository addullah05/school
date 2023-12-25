const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema({
     token:{
        type: String, unique: true

     }
},{ timestamps: false});

const token = mongoose.model("tokens", tokenSchema);

module.exports = token