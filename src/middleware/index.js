const axios = require("axios");

async function getAllTodos() {
  let todos = await axios.get("http://localhost:3000/todos");
  return todos.data.result;
}

async function deleteTodo(key) {
  await axios.delete(`http://localhost:3000/todos?createdAt=${key}`);
}

async function addTodo(todo) {
  await axios.post('http://localhost:3000/todos/', todo)
}

export default {
  getAllTodos,
  deleteTodo,
  addTodo
};
