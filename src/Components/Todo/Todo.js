import "./Todo.css";
import Task from "../Task/Task";
import { Card } from "@material-ui/core";
import middleware from "../../middleware/index";

const Todo = (props) => {
  let { todos } = props;
  const deleteTask = async (createdAt) => {
    middleware.deleteTodo(createdAt);
    props.setTodos(todos.filter((t) => t.createdAt !== createdAt));
  };

  return (
    <Card className="todo-card">
      {todos.length ? (
        todos.map((data, index) => {
          return (
            <Task
              taskDescription={data.todo}
              deleteTask={deleteTask}
              createdAt={data.createdAt}
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
