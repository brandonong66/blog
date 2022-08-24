const express = require("express")
const router = express.Router()
const { Post, validatePost } = require("../models/posts")

//post create a new post
router.post("/", async (req, res) => {
  const error = await validatePost(req.body)
  if (error.message) res.status(400).send(error.message)
  post = new Post({
    title: req.body.title,
    body: req.body.body,
  })

  post
    .save()
    .then((post) => {
      res.send(post)
    })
    .catch((error) => {
      res.status(500).send("Post was not stored in db")
    })
})

//get all posts
router.get("/", (req, res) => {
  Post.find()
    .then((posts) => res.send(posts))
    .catch((error) => {
      res.status(500).send("Error getting posts")
    })
})

module.exports = router
