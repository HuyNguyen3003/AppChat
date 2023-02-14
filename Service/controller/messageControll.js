const Messages = require("../model/messageModel")


module.exports.addMgs = async (req, res, next) => {
    try {
        const { from, to, message } = req.body
        const data = await Messages.create({
            message: { text: message },
            users: [from, to],
            sender: from,
        })
        if (data) return res.json({ mgs: "MGS addedd succseefully" })
        return res.json({ mgs: "Failed to add mes to the db" })
    } catch (e) {
        console.log(e)
        next(e)
    }


}

module.exports.getMgs = async (req, res, next) => {
    try {
        const { from, to } = req.body
        const message = await Messages
            .find({
                users: {
                    $all: [from, to],
                }
            })
            .sort({ updatedAt: 1 })
        const pjMessage = message.map((mgs) => {
            return {
                from: mgs.sender.toString() === from,
                message: mgs.message.text
            }

        })


        res.json(pjMessage)

    } catch (e) {
        console.log(e)
        next(e)
    }


}