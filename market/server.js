var createError = require("http-errors")
var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
const session = require("express-session")
const passport = require("passport")
const methodOverride = require("method-override")

require("dotenv").config()
require("./config/database")
require("./config/passport")

const indexRouter = require("./routes/index")
const usersRouter = require("./routes/users")
const itemsRouter = require("./routes/items")
const ordersRouter = require("./routes/orders")
const commentsRouter = require("./routes/comments")

var app = express()

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))
app.use(methodOverride("_method"))

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
)

app.use(passport.initialize())
app.use(passport.session())

// Custom middleware to add the req.user to every ejs template
app.use(function (req, res, next) {
  res.locals.user = req.user
  next()
})

app.use("/", indexRouter)
app.use("/users", usersRouter)
app.use("/items", itemsRouter)
app.use("/orders", ordersRouter)
app.use("/", commentsRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.err = req.app.get("env") === "development" ? err : {}
  // render the error page
  res.status(err.status || 500)
  res.render("error", { err })
})

module.exports = app
