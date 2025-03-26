import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const TodoList = () => {
  const { tasks, addTask, toggleTask, deleteTask } = useContext(TodoContext);
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      addTask(taskInput);
      setTaskInput("");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 5 }}>
      <h2>To-Do List</h2>
      <TextField
        label="Add Task"
        variant="outlined"
        fullWidth
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={handleAddTask} fullWidth>
        Add
      </Button>

      <List>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            sx={{
              textDecoration: task.completed ? "line-through" : "none",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#f4f4f4",
              mt: 1,
              borderRadius: 1,
              p: 1,
            }}
          >
            <span>{task.text}</span>
            <div>
              <IconButton onClick={() => toggleTask(task.id)}>
                {task.completed ? (
                  <CheckCircleIcon color="success" />
                ) : (
                  <RadioButtonUncheckedIcon />
                )}
              </IconButton>
              <IconButton onClick={() => deleteTask(task.id)}>
                <DeleteIcon color="error" />
              </IconButton>
            </div>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TodoList;
