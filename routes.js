// routes.js
const express = require("express");
const router = express.Router();

// Import controllers

const userController = require("./controllers/UserController");

const problemController = require("./controllers/ProbelemController");

// userController Routes
router.post("/users/getUserByUsername", userController.getUserByUsername);

// problemController Routes
router.get("/problems", problemController.getAllProblem);
router.post("/problems/getProblemByID", problemController.getProblemByID);
router.post("/problems/deleteProblem", problemController.deleteProblem);
router.post("/problems/createProblem", problemController.createProblem);
router.post("/problems/editProblem", problemController.editProblem);

module.exports = router;
