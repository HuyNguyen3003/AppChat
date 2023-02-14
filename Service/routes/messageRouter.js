
const router = require("express").Router()
const message = require("../controller/messageControll")


router.post("/getmgs", message.getMgs)
router.post("/addmgs", message.addMgs)











module.exports = router