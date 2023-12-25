const teacher = require("../models/teacher");

const teacherController = {
    async createTeacher(req, res) {
        try {
            const {full_name, date_of_birth, gender, contact_information, subjects_taught} = req.body;
            const newTeacher = await teacher.create({ full_name, date_of_birth, gender, contact_information, subjects_taught });

            res.status(200).json({newTeacher});
        } catch (error) {
            console.error(error);
            res.status(500).json({error: "server error"})
        }
    },
    async deleteTeacher(req, res) {
        try {
            const deletedTeacher = await teacher.findByIdAndDelete(req.params.id);

            if(!deletedTeacher) {
                return res.status(404).json({message: "teacher not found"})

            }

            //respond with the deleted teacher
            return res.status(200).json({message: "teacher deleted successfully", deletedTeacher })
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({error: "could not delete teacher"})
        }
    },
    async updateTeacher(req, res){
        try {
            const updatedTeacher = await teacher.findByIdAndUpdate(req.params.id, req.body, {new: true})
            res.status(200).json({msg: "teacher updated successfully"})
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({error: "could not update teacher"})
        }
    },
    async teachers(req, res){
        try {
            const teach = await teacher.find();
            res.status(200).json(teach)
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({error: "could not get teachers"})
        }
    },
    async signleTeacher(req, res){
        try {
            const signleTeacher = await teacher.findOne({_id: req.params.id})
            res.status(200).json({signleTeacher})
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({error: "could not get teacher"})
        }
    }
};

module.exports = teacherController