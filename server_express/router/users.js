const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controllerUser");

router.get("/users", Controller.getAllUsers);

module.exports = router;
