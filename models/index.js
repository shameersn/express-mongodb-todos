const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todos", { useMongoClient: true });

mongoose.Promise = global.Promise;

module.exports.todos = require("./todos");
