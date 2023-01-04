const express = require("express")
const router = express.Router()
const User = require("../models/User")

router.route("/").post((req, res) => {
  res.send({ token: "test123" })
})

module.exports = router
