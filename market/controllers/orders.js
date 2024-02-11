const Item = require("../models/item")
const User = require("../models/user")
const Order = require("../models/order")

const newOrder = async (req, res) => {
  console.log(req.body.qty, req.params.id)
  // qty, item id
  try {
    let item = await Item.findById(req.params.id)
    let newOrder = await Order.create()
    newOrder.item = req.params.id
    newOrder.qty = req.body.qty
    newOrder.buyer = user._id
    newOrder.seller = item.seller
    newOrder.save()
    res.redirect("/items")
  } catch (err) {
    res.render("error", { err })
  }
}

module.exports = { newOrder }
