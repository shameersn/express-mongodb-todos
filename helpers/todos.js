const db = require("../models");

exports.listTodo = (req, res) => {
  db.todos
    .find()
    .then(todos => res.json(todos))
    .catch(err => res.send(err));
};

exports.createTodo = (req, res) => {
  db.todos
    .create(req.body)
    .then(newTodo => res.status(201).json(newTodo))
    .catch(err => res.send(err));
};

exports.getTodo = (req, res) => {
  db.todos
    .findById(req.params.todoId)
    .then(todo => res.json(todo))
    .catch(err => res.send(err));
};

exports.updateTodo = (req, res) => {
  db.todos
    .findOneAndUpdate(
      { _id: req.params.todoId },
      { $set: req.body },
      { new: true }
    )
    .then(newtodo => res.json(newtodo))
    .catch(err => res.send(err));
};

exports.deleteTodo = (req, res) => {
  db.todos
    .findByIdAndRemove(req.params.todoId)
    .then(result => res.send(result))
    .catch(err => res.send(err));
};
module.exports = exports;
