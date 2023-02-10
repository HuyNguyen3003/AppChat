
const router = require("express").Router()
const user = require("../controller/usersController")


router.post("/register", user.register)
router.post("/login", user.login)
router.post("/setavatar/:id", user.avatar)
router.get("/alluser/:id", user.alluser)







module.exports = router