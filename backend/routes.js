const express = require("express")
const Post = require("./models/Post")
const router = express.Router()
const cors = require("cors")

const corsOptions = {
  origin: "http://localhost:3000",
  //   optionsSuccessStatus: 200,
}

//get all posts
router.get("/posts", cors(corsOptions), async (req, res) => {
  try {
    const posts = await Post.find().sort([['createdDate', -1]])
    res.send(posts)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//get the number of posts
router.get("/posts/count", cors(corsOptions), async (req, res) => {
  try {
    const count = await Post.estimatedDocumentCount()
    res.send({ count: count })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//get a post based on obj id
router.get("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id })
    res.send(post)
  } catch {
    res.status(404)
    res.send({ error: "Post doesn't exsist. Maybe the id is wrong?" })
  }
})

// create new post
router.post("/posts", async (req, res) => {
  try {
    const post = new Post({
      title: req.body.title,
      body: req.body.body,
      tags: req.body.tags,
    })
    await post.save()
    res.send(post)
  } catch (e) {
    console.error(e.message)
    res.status(500)
    res.send({ error: "error creating new post" })
  }
})
module.exports = router
