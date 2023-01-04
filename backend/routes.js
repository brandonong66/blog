const express = require("express")
const router = express.Router()
const cors = require("cors")
const PORT = process.env.PORT || 5001
const bodyParser = require("body-parser")

const postsRoutes = require("./routes/Post")
const loginRoutes = require("./routes/Login")

app = express()

//middlewares
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/posts", postsRoutes)
app.use("/login", loginRoutes)

module.exports = app
