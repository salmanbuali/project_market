const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    comment: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    itemId: { type: Schema.Types.ObjectId, ref: "Item" },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("User", userSchema)
