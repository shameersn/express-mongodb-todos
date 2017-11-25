$(document).ready(function() {
  /* atach necessary event listners */
  $("#todoinput").keyup(e => {
    if (e.which === 13) {
      addNewTodo();
    }
  });

  $(".list").on("click", "li", function() {
    updateTodo($(this));
  });

  $(".list").on("click", "span", function(e) {
    e.stopPropagation();
    deleteTodo($(this).parent());
  });
  /* get all the todos */
  getAllTodos();
});

function getAllTodos() {
  $.getJSON(`api/todos`)
    .then(data => {
      data.forEach(addTodo);
    })
    .catch(err => console.log(err));
}

function addTodo(todo) {
  let newTodo = $(`<li>${todo.title} <span>X</span></li>`);
  newTodo.addClass(todo.status ? "completed" : "");
  newTodo.data("id", todo._id);
  newTodo.data("completed", todo.status);
  $(".list").append(newTodo);
}

function addNewTodo() {
  $.post(`api/todos`, {
    title: $("#todoinput").val()
  })
    .then(addTodo)
    .then(() => $("#todoinput").val(""))
    .catch(err => console.log(err));
}

function updateTodo(todo) {
  $.ajax({
    method: "PUT",
    url: `api/todos/${todo.data("id")}`,
    data: { status: !todo.data("completed") }
  })
    .then(updatedTodo => {
      todo.toggleClass("completed");
      todo.data("id", updatedTodo._id);
    })
    .catch(err => console.log(err));
}

function deleteTodo(todo) {
  $.ajax({
    method: "DELETE",
    url: `api/todos/${todo.data("id")}`
  })
    .then(() => {
      todo.remove();
    })
    .catch(err => console.log(err));
}
