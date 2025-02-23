const express = require("express")
const route = express.Router()
const { register, login} = require("../controllers/usersControllers")


// @descr register user
// @route /
// @access private
route.post("auth/register", register)

// @descr login user
// @route /
// @access public
route.post("auth/login", login)

// @descr add drugs
// @route /
// @access private
// route.post("/", addDrugs)



module.exports = route