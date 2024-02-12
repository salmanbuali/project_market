const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    avatar: { type: String },
    email: { type: String },
    googleId: {
      type: String,
      required: true,
    },
    orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
    items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("User", userSchema)
