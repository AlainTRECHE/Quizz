const express = require("express");
const router = express.Router();

const mainController = require("./controllers/mainController");
const questionController = require("./controllers/questionController");

router.get("/", mainController.index);
router.get("/", questionController.findAll); 


module.exports = router;