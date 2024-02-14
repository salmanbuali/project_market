const Item = require("../models/item")
const User = require("../models/user")
const Comment = require("../models/comment")

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
      res.redirect(`/items/show/${theNewReturenedItem._id}`)
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
    let search = ""
    if (req.query.value) {
      search = req.query.value
    }

    // let highToLow = 1
    // if (res.locals.pricing) {
    // highToLow = res.locals.pricing
    // }
    // console.log(highToLow)
    let items = await Item.find({
      name: { $regex: search, $options: "i" },
    }).sort({ price: 1 })

    let message = ""
    if (req.query) {
      message = req.query.message
    }
    res.render("items/index", { items, message })
  } catch (err) {
    res.render("error", { err })
  }
}

const updatePage = async (req, res) => {
  try {
    if (req.user) {
      // console.log(seller)
      let item = await Item.findById(req.params.id)
      console.log(req.user._id)
      console.log(item.seller)
      if (req.user._id.equals(item.seller)) {
        //  ????????? why is they not the same
        res.render("items/update", { item })
      } else {
        const message = "this item isn't yours!"
        res.redirect("/items?message=" + message)
      }
    } else {
      const message = "you are not logged in"
      res.redirect("/items?message=" + message)
    }
  } catch (err) {
    res.render("error", { err })
  }
}
const updateItem = async (req, res) => {
  try {
    if (req.user) {
      let item = await Item.findOne({ _id: req.params.id })
      // console.log(req.body)
      if (req.user.equals(item.seller)) {
        // console.log(req.body)
        await Item.updateOne({ _id: req.params.id }, req.body)
        const message = "item updated successfully!"
        res.redirect(`/items?message=${message}`)
      } else {
        const message = "this item isn't yours!"
        res.redirect("/items?message=" + message)
      }
    } else {
      const message = "you are not logged in"
      res.redirect("/items?message=" + message)
    }
  } catch (err) {
    res.render("error", { err })
  }
}

const show = async (req, res) => {
  try {
    // console.log(req.params.id)
    const item = await Item.findById(req.params.id).populate("seller")
    const comments = await Comment.find({ itemId: item._id }).populate("userId")
    let message = ""
    if (req.query) {
      message = req.query.message
    }
    res.render("items/show", { item, message, comments })
  } catch (err) {
    console.log(err)
  }
}

const deleteItem = async (req, res) => {
  try {
    if (req.user) {
      let item = await Item.findOne({ _id: req.params.id })
      // console.log(req.body)
      if (req.user.equals(item.seller)) {
        // console.log(req.body)
        await Item.updateOne({ _id: req.params.id }, { qty: 0 })
        const message = "item deleted successfully!"
        res.redirect(`/items?message=${message}`)
      } else {
        const message = "this item isn't yours!"
        res.redirect("/items?message=" + message)
      }
    } else {
      const message = "you are not logged in"
      res.redirect("/items?message=" + message)
    }
  } catch (err) {
    res.render("error", { err })
  }
}

const filter = async (req, res) => {
  const filterVal = req.query.filterVal
  if (!filterVal) {
    res.redirect("/items")
  }
  try {
    let items = await Item.find({ price: { $lt: filterVal } })
    res.render("items/index", { items })
  } catch (err) {
    res.render("error", { err })
  }
}

module.exports = {
  newItem,
  createItemPage,
  index,
  show,
  updateItem,
  updatePage,
  deleteItem,
  filter,
}
