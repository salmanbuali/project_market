const Item = require("../models/item")
const User = require("../models/user")
const Comment = require("../models/comment")

const show = () => {}


const createComment = async (req, res) => {
  // console.log('body',req.body.comment)
  try {
    let item = await Item.findById(req.params.id).populate("seller")
    const comments = await Comment.find({itemId: item._id}).populate("userId")
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
comment.save()
res.render(`items/show`, {item, comment, comments})
  }
  catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
}


module.exports = { 
  createComment,
  show }

