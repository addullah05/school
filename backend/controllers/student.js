const student = require("../models/student");

const studentController = {
    async createStudent(req, res){
        try {
            const {full_name, date_of_birth, gender, address, contact_information, class_enrolled, parent_guardian_name, parent_guardian_contact} =  req.body;
            const newStudent = await student.create({full_name, date_of_birth, gender, address, contact_information, class_enrolled, parent_guardian_name, parent_guardian_contact});

            //respond with the created student 
            res.status(200).json({newStudent});
        } catch (error) {
            console.error(error.message);
            res.status(500).json({error: "server error"})
        }
    },
    async deleteStudent(req, res){
        try {
            const deletedStudent = await student.findByIdAndDelete(req.params.id);

            res.status(200).json({msg:"student deleted successfully",deletedStudent})
        } catch (error) {
            console.error(error.message);
            res.status(500).json({error: "server error"})
        }
    },
    async updateStudent(req, res){
        try {
            const updatedStudent = await student.findByIdAndUpdate(req.params.id, req.body, {new: true});
            res.status(200).json({msg: "student updated successfully", updatedStudent})
        } catch (error) {
            console.error(error.message);
            res.status(500).json({error: "server error"})
        }
    },
    async getStudents(req, res) {
        try {
            const students = await student.find()
            res.status(200).json(students)
        } catch (error) {
            console.error(error.message);
            res.status(500).json({error: "server error"})
        }
    },
    async student(req, res){
        try {
            const getStudent = await student.findOne({_id: req.params.id});
            res.status(200).json(getStudent)
        } catch (error) {
            console.error(error.message);
            res.status(500).json({error: "server error"})
        }
    }
};

module.exports = studentController;