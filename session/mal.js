const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const bodyParser = require('body-parser');

//app.use(cookieParser());

// Assume the server is malicious. Doesn't do anything useful. Only changes cookies.
app.get("/malhome", (req, res) => {
  res.send(`<h1> I am Malicious </h1><script> console.log("Session = " + document.cookie["user"]); </script>`)
})


app.listen(8002);
