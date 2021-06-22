import Todo from "../../Components/Todo/Todo";
import TodoInput from "../../Components/TodoInput/TodoInput";
import "./HomePage.css";
import { useState , useEffect} from "react";
import middleware from "../../middleware";

const HomePage = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await middleware.getAllTodos();
      console.log(todos)
      setTodos(todos);
    };
    fetchTodos();
  }, []);
  const addTask = (newTaskDescription) => {
    if (newTaskDescription) {
      middleware.addTodo(newTaskDescription)
      setTodos([...todos, {todo:newTaskDescription,createdAt: (new Date).getTime()}]);
    }
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
