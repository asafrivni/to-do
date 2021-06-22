const axios = require("axios");
const port = 3000
const ip = "165.227.226.71"

async function getAllTodos() {
  let todos = await axios.get(`http://${ip}:${port}/todos`);
  return todos.data.result;
}

async function deleteTodo(key) {
  await axios.delete(`http://${ip}:${port}/todos?createdAt=${key}`);
}

async function addTodo(todo) {
  await axios.post(`http://${ip}:${port}/todos/`, todo)
}

export default {
  getAllTodos,
  deleteTodo,
  addTodo
};
