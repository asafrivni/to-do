import { Button, TextField } from "@material-ui/core/";
import { useState } from "react";
import "./TodoInput.css";

const TodoInput = (props) => {
  const [input, setInput] = useState("");

  return (
    <div className="inputs">
      <TextField
        variant="outlined"
        size="medium"
        id="newTask"
        placeholder="הכנס משימה חדשה:"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            props.addTask(input);
            setInput("");
          }
        }}
      />
      <Button
        className="new-task-button"
        variant="contained"
        onClick={() => {
          props.addTask(input);
          setInput("");
        }}
      >
        הכנס
      </Button>
    </div>
  );
};

export default TodoInput;
