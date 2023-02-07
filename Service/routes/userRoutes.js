
const router = require("express").Router()
const user = require("../controller/usersController")


router.post("/register", user.register)




module.exports = router