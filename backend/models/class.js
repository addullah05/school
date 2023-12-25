const mongoose = require("mongoose");

const classSchema = mongoose.Schema({
    class_name: {type: String, require: true},
    class_teacher: {type: String, require: true},
    student_in_class: {type: Number, require: true},
})


module.exports = classSchema ;