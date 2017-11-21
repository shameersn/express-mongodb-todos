const express = require("express"),
  app = express(),
  port = process.env.PORT || 3001,
  bodyParser = require("body-parser");

const todoRouter = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("views"));
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile("index");
});

app.use("/api/todos", todoRouter);

app.listen(port, () => {
  console.log(`Express server is running on :- ${port}`);
});
