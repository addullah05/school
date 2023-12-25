const mongoose = require("mongoose");
const school = require('../models/school')


const schoolController = {
    //create school 
    async createSchool (req, res) {
       
        try {
            // Save school data to the database
            const { school_name, school_code, address, contact, principal_name } = req.body;
            const newUser = await school.create({ school_name, school_code, address, contact, principal_name });

            // Respond with the created school
            res.status(200).json({ newUser}); 
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: "Server Error" });
        }
    
    },

    //create delete school logic
    async deleteSchool(req, res) {
        try {
            // find school by id and delete the school
            const deleteSchool = await school.findByIdAndDelete(req.params.id);
            
            if (!deleteSchool) {
                return res.status(404).json({ error: "School not found" });
            }
    
            // Respond with the deleted school
            return res.status(200).json({ message: "School deleted successfully" });
        } catch (err) {
            console.log(err.message)
            return res.status(500).json({ error: "Could not delete school" });
        }
    },

    //create update school logic
    async updateSchool(req, res) {
        try {

            //find school by id and update
            const updatedSchool = await school.findByIdAndUpdate(req.params.id, req.body);
    
            if (!updatedSchool) {
                return res.status(404).json({ error: "School not found" });
            }
            
            //respond to the updated school
            return res.status(200).json({ message: "School updated successfully", user: updatedSchool });
        } catch (err) {
            return res.status(500).json({ error: "Could not update school" });
        }
    },

    // create get all school logic 
    async schools(req, res) {
        try {

            // find schools in the database
            const allSchool = await school.find();
           
             //respond with the all schools
            return res.status(200).json(allSchool);
        } catch (error) {
            return res.status(500).json({ error: "Could not fetch users" });
        }
    },

    //create get the single school 
    async school(req, res) {

        try {

            //find the school 
            const singleSchool = await school.findOne({ _id: req.params.id}).select('-updatedAt -__v');

            //respond to the school
            return res.status(200).json(singleSchool);
        } catch (error) {
            return res.status(500).json({ error: "could not found scho"})
        }
    }    

    
}

module.exports = schoolController;

