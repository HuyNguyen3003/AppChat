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
module.exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) return res.json({ mgs: "err email", status: false })
        else {
            const isPasswordValue = await brcybt.compare(password, user.password)
            if (!isPasswordValue) return res.json({ mgs: "err password", status: false })
            else {
                delete user.password
                return res.json({ status: true, user })
            }
        }
    } catch (e) {
        console.log(e)
        next(e)
    }


}
module.exports.avatar = async (req, res, next) => {
    try {
        const { isAvatar, avatarImg } = req.body
        const userId = req.params.id

        const user = await User.findByIdAndUpdate(userId, {
            isAvatar, avatarImg
        })

        return res.json({
            isSet: user.isAvatar,
            avatar: avatarImg
        })


    } catch (e) {
        console.log(e)
        next(e)
    }


}



module.exports.alluser = async (req, res, next) => {
    try {
        const userId = req.params.id
        const user = await User.find({ _id: { $ne: userId } }).select([
            "email", "username", "avatarImg", "_id"
        ])
        return res.json(user)



    } catch (e) {
        console.log(e)
        next(e)
    }


}