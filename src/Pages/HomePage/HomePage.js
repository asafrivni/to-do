import Todo from "../../Components/Todo/Todo";
import TodoInput from "../../Components/TodoInput/TodoInput";
import "./HomePage.css";
import { useState } from "react";
import middleware from "../../middleware";

const HomePage = () => {
  const [todos, setTodos] = useState([]);
  useEffect(async () => {
    const data = await middleware.getAllTodos();
    setTodos(data);
  });
  const addTask = (newTaskDescription) => {
    if (newTaskDescription) setTodos([...todos, newTaskDescription]);
  };

  return (
    <div className="home-page">
      <h1 className="title">ניהול משימות</h1>
      <TodoInput addTask={addTask} />
      <Todo className="todo-card" todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default HomePage;
