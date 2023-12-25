const mongoose = require("mongoose");
const classSchema = require("../models/class");

const Classs = mongoose.model("CLASSES", classSchema);
const Class = {
    async createClass(req, res) {
        try {
            const {class_name,class_teacher,student_in_class} = req.body;
            const newClass = await Classs.create({class_name, class_teacher, student_in_class});
            res.status(200).json({newClass})
        } catch (error) {
            console.log(error.message);
        }
    },
    async updateClass(req, res) {
        try {
            const updatedClass = await Classs.findByIdAndUpdate(req.params.id, req.body, {new: true});
            if(!updatedClass) {
                return res.status(404).json({msg: "class not found"})
            }

            res.status(200).json({msg: "class updated successfully", updatedClass})
        } catch (error) {
            console.log(error.message);
        }
    },
    async deleteClass(req, res) {
        try {
            const deletedClass = await Classs.findByIdAndDelete(req.params.id);
            if(!deletedClass){
                return res.status(404).json({msg: "class not found"});
            }
            res.status(200).json({msg: "class deleted successfully", deletedClass})
        } catch (error) {
            console.log(error.message)
        }
    },
    async Classes(req, res) {
        try {
            const Class = await Classs.find();
            res.status(200).json(Class)            
        } catch (error) {
            console.log(error.message)
        }
    },
    async Class(req, res) {
        try {
            const Class = await Classs.findOne({_id: req.params.id});
            if(!Class){
                return res.status(404).json({msg: "not found"});
            }
            res.status(200).json({Class})
        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = Class;