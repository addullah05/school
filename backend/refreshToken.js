const mongoose = require("mongoose")

const tokenSchema =  mongoose.Schema({
    token: {type:String, unique: true},
     
}, {timestamps: false});

const RefreshToken = mongoose.model("token", tokenSchema);

module.exports = RefreshToken;