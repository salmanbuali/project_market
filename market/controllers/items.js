const Item = require("../models/item")
const User = require("../models/user")

const newItem = async (req, res) => {
  try {
    if (req.user) {
      req.body.sold = false
      req.body.seller = req.user._id
      theNewReturenedItem = await Item.create(req.body)
      // needs to update user items
      await User.updateOne(
        { _id: req.user._id },
        { $push: { items: theNewReturenedItem._id } }
      )
      res.redirect("/items")
    } else {
      let message = "you are not logged in"
      res.redirect("/items/new?message=" + message)
    }
  } catch (err) {
    res.render("error", { err })
  }
}

const createItemPage = async (req, res) => {
  try {
    if (req.user) {
      res.render("items/new")
    } else {
      const message = "you are not logged in"
      // alert("you are not logged in")
      res.redirect("/items?message=" + message)
    }
  } catch (err) {
    res.render("error", { err })
  }
}

const index = async (req, res) => {
  try {
    let items = await Item.find()
    let message = ""
    if (req.query.message) {
      message = req.query.message
    }
    res.render("items/index", { items, message })
  } catch (error) {
    res.render("error", { err })
  }
}

const updatePage = async (req, res) => {
  try {
    if (req.user) {
      let item = await Item.findOne({ _id: req.param._id })
      if (req.user == item.seller) {
        res.render("items/update", { item })
      } else {
        const message = "this item isn't yours!"
        res.redirect("/items?message=" + message)
      }
    } else {
      const message = "you are not logged in"
      res.redirect("/items?message=" + message)
    }
  } catch (error) {
    res.render("error", { err })
  }
}
const updateItem = (req, res) => {
  res.redirect("/items?message=" + message)
}
module.exports = { newItem, createItemPage, index, updatePage, updateItem }
