const express = require("express")
const router = express.Router();
const auth = require("../middlewares/auth");
const studentController = require("../controllers/student")
//student routes

router.post ("/student", studentController.createStudent)

router.delete ("/student/:id", studentController.deleteStudent)

router.put ("/student/:id", studentController.updateStudent)

router.get ("/student", studentController.getStudents)

router.get ("/student/:id", studentController.student)

module.exports = router;