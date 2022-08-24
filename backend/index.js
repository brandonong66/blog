const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()
const postsRoute = require('./routes/posts')

const PORT = process.env.PORT || 5001

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routess
app.use('/posts',postsRoute)


//connect to mongodb atlas
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to mongodb atlas")
  })
  .catch((error) => {
    console.log("Error connecting to mongodb atlas")
  })

app.listen(PORT, () => {
  console.log("Server started at PORT ", PORT)
})
