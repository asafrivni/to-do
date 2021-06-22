const axios = require("axios");

async function getAlltodos() {
  let todos = await axios.get("localhost:3000/todos");
  todos = JSON.parse(todos).result;
  return todos;
}

async function deleteTodo(key) {
  await axios.delete(`localhost:3000/todos?createdAt=${key}`);
}
export default {
  getAllTodos,
  deleteTodo,
};
