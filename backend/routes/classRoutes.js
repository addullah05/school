const express = require("express");
const Class = require("../controllers/class");
const route = express.Router();

route.post('/class', Class.createClass);

route.put('/class/:id', Class.updateClass);

route.delete('/class/:id', Class.deleteClass);

route.get('/classes', Class.Classes);

route.get('/class/:id', Class.Class);

module.exports= route;