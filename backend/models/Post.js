const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
  //id: Number, add post data obj into posts collection
  id: { type: Number, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: String, default: "brandonong66"},
  createdDate: {
    type: Date,
    default: () => Date.now(),
  },
  modifiedDate: {
    type: Date,
    default: () => Date.now(),
  },
  tags: { type: [String], required: true },
  archived: {
    type: Boolean,
    default: false,
  },
})

postSchema.pre("save", function (next) {
  this.modifiedDate = Date.now()
  next()
})

module.exports = mongoose.model("Post", postSchema)
