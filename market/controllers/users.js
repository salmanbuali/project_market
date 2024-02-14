const User = require("../models/user")

const show = async (req, res) => {
  try {
    const profile = await User.findById(req.params.id).populate("items")
    const items = profile.items
    res.render("users/show", { profile, items })
  } catch (err) {
    res.render("error", { err })
  }
}

const showOrders = async (req, res) => {
  try {
    let user = await User.findById(req.params.id).populate("orders")
    for (let i = 0; i < user.orders.length; i++) {
      await user.orders[i].populate("item")
      await user.orders[i].populate("buyer")
      await user.orders[i].populate("seller")
    }
    res.render("users/orders", { user })
  } catch (err) {
    res.render("error", { err })
  }
}
const showPurchased = async (req, res) => {
  try {
    let user = await User.findById(req.params.id).populate("orders")
    for (let i = 0; i < user.orders.length; i++) {
      await user.orders[i].populate("item")
      await user.orders[i].populate("buyer")
      await user.orders[i].populate("seller")
    }
    res.render("users/orders-purchased", { user })
  } catch (err) {
    res.render("error", { err })
  }
}

const showSold = async (req, res) => {
  try {
    let user = await User.findById(req.params.id).populate("orders")
    for (let i = 0; i < user.orders.length; i++) {
      await user.orders[i].populate("item")
      await user.orders[i].populate("buyer")
      await user.orders[i].populate("seller")
    }
    res.render("users/orders-sold", { user })
  } catch (err) {
    res.render("error", { err })
  }
}
module.exports = { show, showOrders, showSold, showPurchased }
