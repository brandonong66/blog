const mongoose = require("mongoose")
const yup = require("yup")

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  body: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 5000,
  },
})
const validatePost = (post) => {
  const schema = yup.object().shape({
    title: yup.string().required().min(1).max(50),
    body: yup.string().required().min(1).max(5000),
  })

  return schema
    .validate(post)
    .then((post) => post)
    .catch((error) => {
        return {
            message:error.message
        }
    })
}
exports.Post = new mongoose.model("Post", PostSchema)
exports.validatePost = validatePost
