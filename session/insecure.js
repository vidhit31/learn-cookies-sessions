const express = require("express")
const session = require("express-session")

const app = express();
app.use(express.urlencoded({ extended: false }))

app.use(
  session({
    secret: "SOMESECRET",
    cookie: {},
    resave: false,
    saveUninitialized: false
  })
)

app.get("/", (req, res) => {
  let name = "Guest"

  if (req.session.user) name = req.session.user

  res.send(`
  <h1>Welcome, ${name}</h1>
  <form action="/register" method="POST">
    <input type="text" name="name" placeholder="Your name">
    <button>Submit</button>
  </form>
  <form action="/forget" method="POST">
    <button>Logout</button>
  </form>
  `)
})

app.post("/register", (req, res) => {
  // name = req.body.name.trim()
  // res.redirect("/")
  req.session.user = req.body.name.trim()
  res.send(`<p>Thank you</p> <a href="/">Back home</a>`)
})

app.post("/forget", (req, res) => {
  req.session.destroy(err => {
    res.redirect("/")
  })
})

app.listen(8001)
