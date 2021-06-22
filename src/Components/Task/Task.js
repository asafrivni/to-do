import "./Task.css";
import { Card, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Clear";

const Task = (props) => {
  return (
    <Card className="task-card">
      <div className="card-content">{props.taskDescription}</div>
      <div className="card-actions">
        <IconButton
          aria-label="delete"
          size="small"
          onClick={() => {
            props.deleteTask(props.taskDescription);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </Card>
  );
};

export default Task;
