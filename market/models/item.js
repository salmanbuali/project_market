const mongoose = require("mongoose")
const Schema = mongoose.Schema

const itemSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    desc: { type: String, required: true },
    image: { type: String, required: true },
    sold: { type: Boolean, required: true, default: false },
    qty: { type: Number, required: true },
    seller: { type: Schema.Types.ObjectId, ref: "User", required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Item", itemSchema)
