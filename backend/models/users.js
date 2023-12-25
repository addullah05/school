const { mongoose } = require("mongoose");

const usersSchema =  mongoose.Schema({
    name: {type:String, require: true,},
    email:{type:String, require: true,},     
    password:{type:String, require: true,},   
}, {timestamps: true});

const Users = mongoose.model("users", usersSchema);

module.exports = Users;