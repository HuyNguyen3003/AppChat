
const router = require("express").Router()
const user = require("../controller/usersController")


router.post("/register", user.register)
router.post("/login", user.login)





module.exports = router