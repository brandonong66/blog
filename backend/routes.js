const express = require("express")
const router = express.Router()
const cors = require("cors")
const postsRoutes = require("./routes/Post")
const PORT = process.env.PORT || 5001
const bodyParser = require("body-parser")

app = express()

//middlewares
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/posts", postsRoutes)

module.exports = app
