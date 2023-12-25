const express = require("express");
const router = express.Router();
const auth = require('../middlewares/auth');
const teacherController = require("../controllers/Teacher");

//teacher routes
router.post("/teacher", teacherController.createTeacher);

router.delete("/teacher/:id", teacherController.deleteTeacher);

router.put("/teacher/:id", teacherController.updateTeacher);

router.get("/teachers", teacherController.teachers);

router.get("/teacher/:id", teacherController.signleTeacher);

module.exports = router;