const mongoose = require("mongoose")

const academicSchema = mongoose.Schema({
    start_date: String,
    end_date: String,
    class_name: String,
    class_teacher: String,
    student_in_class: Number
})

const academies = mongoose.model("academy", academicSchema )
module.exports = academies;