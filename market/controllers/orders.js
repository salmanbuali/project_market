const Item = require("../models/item")
const User = require("../models/user")
const Order = require("../models/order")

const newOrder = async (req, res) => {
  try {
    let item = await Item.findById(req.params.id)
    let user = await User.findById(req.user._id)
    let userSeller = await User.findById(item.seller)
    let newOrder = await Order.create({
      item: req.params.id,
      qty: req.body.qty,
      buyer: req.user._id,
      seller: item.seller,
      price: item.price,
    })

    newOrder.save()

    item.qty = item.qty - req.body.qty
    item.save()

    user.orders.push(newOrder._id)
    userSeller.orders.push(newOrder._id)

    user.save()
    userSeller.save()

    res.redirect("/items")
  } catch (err) {
    res.render("error", { err })
  }
}

module.exports = { newOrder }
