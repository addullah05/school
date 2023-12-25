const Joi = require('joi');
const jwtService = require('../../jwtService');
const bcrypt = require('bcrypt');
const Users = require('../../models/users');
const { REFRESH_SECRET } = require('../../config');

const signin = async (req, res) => {
    try {
        // signin schema creation
        const signinSchema = Joi.object({
            email: req.body.email,
            password: req.body.password,
        });

        // create validation for signin schema:
        const { error } = signinSchema.validate(req.body);

        if (error) {
            return res.status(400).json({ error: error.message });
        }

        // find the user in the database by their email:
        const user = await Users.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        // compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordValid) {
            return res.status(404).json({ error: 'User password not matched' });
        }

        // create token for authentication
        const token = jwtService.sign({ userId: user._id, email: user.email });

        // Respond with the generated token and refresh token
        res.json({ token });
    } catch (error) {
        // Log the error for debugging purposes
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = signin;
