require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const routes = require('./routes')
const cors = require('cors')

// Connect to MongoDB database
mongoose
	.connect(process.env.MONGO_URI, { useNewUrlParser: true, dbName: 'blog-database' })
	.then(() => {
		const app = express()
		app.use(express.json())
		app.use(cors())
        app.use('', routes)

		app.listen(process.env.PORT, () => {
			console.log(`Server has started at port ${process.env.PORT}`)
		})
	})