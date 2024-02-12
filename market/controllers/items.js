const Item = require("../models/item")
const User = require("../models/user")

const newItem = async (req, res) => {
  try {
    req.body.sold = false
    req.body.seller = req.user._id
    theNewReturenedItem = await Item.create(req.body)
    // needs to update user items
    await User.updateOne(
      { _id: req.user._id },
      { $push: { items: theNewReturenedItem._id } }
    )
    res.redirect("/items")
  } catch (err) {
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

const index = async (req, res) => {
  try {
    let items = await Item.find()
    res.render("items/",{ items })

  } catch (err) {
    res.render("error", { err })
  }
}

const show = async (req, res) => {
  try {
    console.log(req.params.id)
    const item = await Item.findById(req.params.id).populate('seller')
    res.render('items/show' , { item })
  } catch (err) {
    console.log(err)
  }
}

module.exports = { newItem, createItemPage, index, show}
