const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  createdDate: {
    type: Date,
    default: () => Date.now(),
  },
  modifiedDate: {
    type: Date,
    default: () => Date.now(),
  },
  tags: [String],
})

postSchema.pre("save", function (next) {
  this.modifiedDate = Date.now()
  next()
})

module.exports = mongoose.model("Post", postSchema)
