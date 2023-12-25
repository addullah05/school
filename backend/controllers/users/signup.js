const Joi = require('joi');
const Users = require('../../models/users');
const jwtService = require('../../jwtService');
const bcrypt = require('bcrypt');
const token = require('../../models/token');

//handling the signup when the signed up
const signup = async (req, res) => {
    try {
        //create userSchema 
        const userSchema = Joi.object({
            name: Joi.string().min(3).max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            repeat_password: Joi.ref('password')
        });

        //validate the request 
        const { error } = userSchema.validate(req.body);
        
        if (error) {
            return res.status(400).json({msg: error.details[0].message });
        }
        
        //checking the existingUser
        const existingUser = await Users.findOne({ email: req.body.email });

        // If a user with the same email already exists and then we indecating that email is already in use
        if (existingUser) {
            return res.status(400).json({ msg: 'Email already exists' });
        }

        //create hashed password for user
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        
        // creating newUser object 
        const newUser = new Users({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });

        //save newUser in database
        const result = await newUser.save();

        //create token
        const getToken = jwtService.sign({ userId: result._id, email: result.email });
        await token.create({token: getToken});
        // Respond with the generated token and refresh token
        res.json({ getToken });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = signup;
