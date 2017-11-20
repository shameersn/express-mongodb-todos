const express = require("express");
const router = express.Router();
const todoHelper = require("../helpers/todos");

router
  .route("/")
  .get(todoHelper.listTodo)
  .post(todoHelper.createTodo);

router
  .route("/:todoId")
  .get(todoHelper.getTodo)
  .put(todoHelper.updateTodo)
  .delete(todoHelper.deleteTodo);

module.exports = router;
