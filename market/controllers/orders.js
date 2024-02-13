const Item = require("../models/item")
const User = require("../models/user")
const Order = require("../models/order")

const newOrder = async (req, res) => {
  console.log(req.body.qty, req.params.id, req.user._id)
  // qty, item id, user
  try {
    let item = await Item.findById(req.params.id)
    let user = await User.findById(req.user._id)

    let newOrder = await Order.create({
    item: req.params.id,
    qty: req.body.qty,
    buyer: req.user._id,
    seller: item.seller,
    price: item.price
    })
    newOrder.save()

    item.qty = item.qty - req.body.qty
    item.save()

    user.orders.push(newOrder._id)
    user.save()

    res.redirect("/items")
  } catch (err) {
    res.render("error", { err })
  }
}

module.exports = { newOrder }
