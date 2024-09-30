const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Hello From dashboard");
});

app.use("/hello", (req, res) => {
  res.send("Hello hello");
});

//whatever the request is we are sending the response as "Hello from server"

app.use("/test", (req, res) => {
  res.send("Hello From Server");
});

// we are started to listen
app.listen(3000, () => {
  res.send("Home Page");
  console.log("Server is successfully running on PORT 3000");
});
