const mongoose = require("mongoose");

const schoolSchema = mongoose.Schema({
    school_name: String,
    school_code: Number,
    address: String,
    contact: Number,
    principal_name: String
}, {timestamps: true});


const school = mongoose.model("school", schoolSchema);

module.exports = school;

