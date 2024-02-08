const Item = require("../models/item")
const User = require("../models/user")

const newItem = async (req, res) => {
  try {
    req.body.sold = false
    req.body.seller = req.user._id
    await Item.create(req.body)
    // needs to update user items

    res.redirect("/items")
  } catch (err) {
    // Typically some sort of validation error
    console.log(err)
    res.render("error", { err })
  }
}

const createItemPage = async (req, res) => {
  try {
    res.render("items/new")
  } catch (err) {
    res.render("error", { err })
  }
}

const index = (req, res) => {
  try {
    res.render("items/")
  } catch (error) {
    res.render("error", { err })
  }
}

module.exports = { newItem, createItemPage, index }
