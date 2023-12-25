const Users = require("../models/users");
const jwtService = require("../jwtService"); // Ensure jwtService is properly required


//create usersController
const usersController = {
       
       async users(req, res) {
           try {

               //find all the users in database
               const users = await Users.find();
               if (!users) {
                   return res.status(404).json({ msg: "User not found" });
               }

               //sending to user
               res.json(users);
           } catch (err) {
               // handling cast error
               if (err.name === "CastError") {
                   return res.status(400).json({ msg: "Invalid user ID" });
               }
               res.status(500).json({ msg: "Internal server error", msg: err.message});
           }
       }
   };
   
   module.exports = usersController;
