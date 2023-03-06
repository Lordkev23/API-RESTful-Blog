const express = require("express");
const router = express.Router();

const ArticleController = require("../controllers/article");

//Pruebe Routes
router.get("/pruebe-route", ArticleController.test);
router.get("/names", ArticleController.names);

//Real Route
router.post("/create", ArticleController.create);

module.exports = router;