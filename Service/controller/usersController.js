const User = require("../model/userModel")
const brcybt = require("bcrypt")

module.exports.register = async (req, res, next) => {
    try {
        const { username, password, email } = req.body
        const emailcheck = await User.findOne({ username })
        if (emailcheck) return res.json({ mgs: "email already user", status: false })
        const hashedPassword = await brcybt.hash(password, 10)
        const user = await User.create({
            email, password: hashedPassword, username
        })
        delete user.password
        return res.json({ status: true, user })
    } catch (e) {
        console.log(e)
        next(e)
    }


}