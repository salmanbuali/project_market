var express = require("express")
var router = express.Router()
const commentsController = require("../controllers/comments")

// POST /items/show/:id
router.post("/items/show/:id", commentsController.createComment)

// DELETE /items/comments/:id
router.delete("/items/comments/:id", commentsController.deleteComment)

module.exports = router
