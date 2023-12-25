const express = require("express")
const router = express.Router();
const schoolController = require("../controllers/school");
const auth = require("../middlewares/auth");

//school routes

router.post("/school", schoolController.createSchool);

router.delete("/school/:id", schoolController.deleteSchool);

router.put("/school/:id",auth, schoolController.updateSchool);

router.get("/schools", schoolController.schools);

router.get("/school/:id", schoolController.school)

module.exports = router;