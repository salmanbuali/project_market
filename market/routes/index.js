var express = require("express")
var router = express.Router()
const passport = require("passport")

/* GET home page. */
router.get("/", function (req, res) {
  res.redirect("/items")
})

// Google login route
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
)

// Google OAuth callback route
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/",
  })
)

// OAuth logout route
router.get("/logout", function (req, res) {
  req.logout(function () {
    res.redirect("/items")
  })
})

module.exports = router
