const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    full_name: String,
    date_of_birth: String,
    gender: String,
    address: String,
    contact_information: String,
    class_enrolled: Number,
    parent_guardian_name: String,
    parent_guardian_contact: String
})

const student = mongoose.model("student", studentSchema);

module.exports = student;