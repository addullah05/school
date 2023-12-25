const academies = require("../models/academy")
const academy = {
    async creatAcademy(req, res) {
        try {
            const { start_date, end_date } = req.body;
            const newAcademy = await academies.create({ start_date, end_date });
            res.status(200).json({ newAcademy });
        } catch (error) {
            console.error(error.message);
            res.status(500).json('Server Error');
        }
    },
    async updateAcademy(req, res) {
        try {
            const updatedAcademy = await academies.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedAcademy) {
                return res.status(404).json({ msg: "Academy not found" });
            }
            res.status(200).json({ msg: "Academy updated successfully", updatedAcademy });
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
    },
    async deleteAcademy(req, res) {
        try {
            const deletedAcademy = await academies.findByIdAndDelete(req.params.id);
            if (!deletedAcademy) {
                return res.status(404).json({ msg: "Academy not found" });
            }
            res.status(200).json({ msg: "Academy deleted successfully", deletedAcademy });
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
    },
    async academies(req, res) {
        try {
            const Academies = await academies.find();
            res.status(200).json(Academies)
        } catch (error) {
            console.log(error.message);
        }
    },
    async getacademy(req, res) {
        try {
            const getAcademy = await academies.findById(req.params.id);
            if(!getAcademy){
                return res.status(404).json({msg: "not found"})

            }
            res.status(200).json({getAcademy})
        } catch (error) {
            console.log(error.message);
        }
    }
};

module.exports = academy;
