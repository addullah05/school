const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
    full_name: String,
    date_of_birth: String,
    gender: String,
    contact_information: String,
    subjects_taught: String
})

const teacher = mongoose.model("teacher", teacherSchema);

module.exports = teacher;