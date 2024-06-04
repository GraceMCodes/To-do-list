// changed this script into the html script

import Sortable from "sortablejs";
let todo_wrapper = document.querySelector(".wrapper");
let newTodo = document.querySelector(".todo_name");
let addTodo = document.querySelector(".add_todo");
let todo = [];
const el = document.getElementsByClassName(".wrapper");

Sortable.create(el, {
  group: "el",
  Animation: 500,
});

addTodo.addEventListener("click", () => {
  if (newTodo.value != "") {
    todo.push(newTodo.value);
  }

  let newTodo_list = document.createElement("div");
  newTodo_list.className = "item";
  newTodo_list.innerHTML = newTodo.value;

  let delete_todo = document.createElement("div");
  delete_todo.className = "delete";
  delete_todo.innerHTML = "X";
  newTodo_list.appendChild(delete_todo);

  delete_todo.addEventListener("click", () => {
    todo_wrapper.removeChild(newTodo_list);
  });

  todo_wrapper.appendChild(newTodo_list);

  newTodo.value = "";
});
