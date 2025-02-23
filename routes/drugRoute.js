const express = require("express")
const route = express.Router()
const { addDrugs, getDrugs} = require("../controllers/drugsControllers")


// @descr add drugs
// @route /
// @access private
route.post("/", addDrugs)

// @descr add drugs
// @route /
// @access private
route.get("/", getDrugs)

// @descr add drugs
// @route /
// @access private
// route.post("/", addDrugs)



module.exports = route