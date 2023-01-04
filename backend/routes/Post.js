const express = require("express")
const router = express.Router()
const Post = require("../models/Post")
const cors = require("cors")
const sanitizeHtml = require("sanitize-html")

// create new post
router
  .route("/")
  .get(async (req, res) => {
    if (req.query.all == "true") {
      try {
        const posts = await Post.find().sort([["createdDate", -1]])
        res.send(posts)
      } catch (error) {
        res.status(500).json({ message: error.message })
      }
    } else {
      try {
        const posts = await Post.find({ archived: false }).sort([
          ["createdDate", -1],
        ])
        res.send(posts)
      } catch (error) {
        res.status(500).json({ message: error.message })
      }
    }
  })
  .post(async (req, res) => {
    try {
      const count = await Post.countDocuments()
      const post = new Post({
        id: count + 1,
        title: req.body.title,
        body: sanitizeHtml(req.body.body),
        tags: req.body.tags,
        image: req.body.image,
      })
      await post.save()
      res.send(post)
    } catch (error) {
      res.status(500)
      res.send(error.message)
    }
  })

//get the number of posts
router.get("/count", async (req, res) => {
  if (req.query.all == "true") {
    try {
      const count = await Post.countDocuments()
      res.send({ count: count })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  } else {
    try {
      const count = await Post.find({ archived: false }).count()
      res.send({ count: count })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
})

//get a post based on post id
router
  .route("/:id")
  .get(async (req, res) => {
    try {
      const post = await Post.findOne({ id: req.params.id })
      res.send(post)
    } catch {
      res.status(404)
      res.send({ error: "Post doesn't exsist. Maybe the id is wrong?" })
    }
  })
  .put(async (req, res) => {
    if (
      !(req.body.title || req.body.body || req.body.tags || req.body.archived ||req.body.image)
    ) {
      res.status(400)
      res.send("Error: no change specified")
    } else {
      try {
        let post = await Post.findOne({ id: req.params.id })
        if (req.body.title) {
          post.title = req.body.title
        }
        if (req.body.body) {
          post.body = req.body.body
        }
        if (req.body.tags) {
          post.body.tags = req.body.tags
        }
        if (req.body.archived) {
          post.archived = req.body.archived
        }
        if (req.body.image) {
          post.image = req.body.image
        }

        await post.save()
        res.send(post)
      } catch (error) {
        res.send(error.message)
      }
    }
  })

module.exports = router
