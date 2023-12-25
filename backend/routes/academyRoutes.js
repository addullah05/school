const express = require("express");
const academy = require("../controllers/academy");
const auth = require("../middlewares/auth");

const route = express.Router();

route.post('/academy', academy.creatAcademy );

route.put('/academy/:id', academy.updateAcademy);

route.delete('/academy/:id', academy.deleteAcademy);

route.get('/academies', academy.academies);

route.get('/academy/:id',auth, academy.getacademy);

module.exports= route