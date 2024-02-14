const Comment = require("../models/comment")

const createComment = async (req, res) => {
  try {
    let comment = await Comment.create({
      comment: req.body.comment,
      userId: req.user._id,
      itemId: req.params.id,
    })
    await comment.save()
    res.redirect(`/items/show/${req.params.id}`)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

const deleteComment = async (req, res) => {
  try {
    const item = await Comment.findById(req.params.id)
    if (req.user) {
      if (req.user.equals(item.userId)) {
        await Comment.deleteOne({ _id: req.params.id }).exec()
        const message = "the comment was deleted successfully!"
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
