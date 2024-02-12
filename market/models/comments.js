const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    comment: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    itemId: { type: Schema.Types.ObjectId, ref: "Item", required: true },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Comment", commentSchema)
