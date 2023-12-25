const express = require("express")
const router = express.Router();

//users routes import here
const auth = require("../middlewares/auth");
const usersController = require("../controllers/users");
const signup = require("../controllers/users/signup");
const signOut = require("../controllers/users/signout");
const signin  = require("../controllers/users/signin");

//create users routes
router.post('/signup', signup)

router.post('/signin', signin);

router.get('/users',auth, usersController.users);

router.post('/signOut', signOut.signOut);


module.exports = router;