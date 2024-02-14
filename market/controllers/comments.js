const Item = require("../models/item")
const User = require("../models/user")
const Comment = require("../models/comment")

const show = () => {}

const createComment = async (req, res) => {
  // console.log('body',req.body.comment)
  try {
    let item = await Item.findById(req.params.id).populate("seller")
    const comments = await Comment.find({ itemId: item._id }).populate("userId")
    // let item2 = await Item.findById(req.params.id)
    // console.log('without .populate',item2)
    // console.log('with',item)
    // let userId = await User.findById(req.user._id)
    // console.log('itemid =',itemId._id,'userid =',userId._id)
    let comment = await Comment.create({
      comment: req.body.comment,
      userId: req.user._id,
      itemId: req.params.id,
    })
    // console.log('this is the comment',comment)
    await comment.save()
    //res.render(`items/show`, {item, comment, comments})
    res.redirect(`/items/show/${item._id}`)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
}

const deleteComment = async (req, res) => {
  try {
    const item = await Comment.findById(req.params.id)
    if (req.user) {
      if (req.user.equals(item.userId)) {
        await Comment.deleteOne({ _id: req.params.id }).exec()
        const message = "the comment was deleted succsufully!"
        res.redirect(`/items/show/${item.itemId}?message=${message}`)
      } else {
        const message = "this comment isn't yours!"
        res.redirect(`/items/show/${item.itemId}?message=${message}`)
      }
      res.redirect("/items/show/" + item.itemId)
    } else {
      const message = "you are not logged in!"
      res.redirect(`/items/show/${item.itemId}?message=${message}`)
    }
  } catch (error) {}
}

module.exports = {
  createComment,
  deleteComment,
}
