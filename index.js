const express = require("express"),
  app = express(),
  port = process.env.PORT || 3001,
  bodyParser = require("body-parser");

const todoRouter = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Api server is running");
});

app.use("/api/todos", todoRouter);

app.listen(port, () => {
  console.log(`Express server is running on :- ${port}`);
});
