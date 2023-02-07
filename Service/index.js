const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const userRouter = require("./routes/userRoutes")


const app = express()
require("dotenv").config()

app.use(cors())
app.use(express.json())
app.use("/api/auth", userRouter)


mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB Connection Succsess")
}).catch((err) => { console.log(err.message) })

const service = app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})