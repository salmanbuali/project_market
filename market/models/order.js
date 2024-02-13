const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema(
  {
    buyer: { type: Schema.Types.ObjectId, ref: 'User' },
    seller: { type: Schema.Types.ObjectId, ref: 'User' },
    item: { type: Schema.Types.ObjectId, ref: 'Item' },
    price: { type: Number, required: true},
    qty: { type: Number, required: true}
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Order', orderSchema)
