import "./Todo.css";
import Task from "../Task/Task";
import { Card } from "@material-ui/core";
import middleware from "../../middleware/index";

const Todo = (props) => {
  let { todos } = props;
  const deleteTask = async (key) => {
    middleware.deleteTodo(key);
    props.setTodos(todos.filter((t) => t.createdAt !== key));
  };

  return (
    <Card className="todo-card">
      {todos.length ? (
        todos.map((data, index) => {
          return (
            <Task
              taskDescription={data.todo}
              deleteTask={deleteTask}
              key={data.createdAt}
            />
          );
        })
      ) : (
        <div className="no-tasks" dir="rtl">
          אין משימות!
        </div>
      )}
    </Card>
  );
};

export default Todo;
