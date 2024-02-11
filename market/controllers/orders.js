const Item = require("../models/item")
const User = require("../models/user")
const Order = require("../models/order")

const newOrder = async (req, res) => {
  console.log(req.body.qty, req.params.id, req.user._id)
  // qty, item id, user
  try {
    let item = await Item.findById(req.params.id)
    let newOrder = await Order.create({
    item: req.params.id,
    qty: req.body.qty,
    buyer: req.user._id,
    seller: item.seller
    })

    
    newOrder.save()
    res.redirect("/items")
  } catch (err) {
    res.render("error", { err })
  }
}

module.exports = { newOrder }
