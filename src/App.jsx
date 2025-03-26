import React from "react";
import TodoProvider from "./context/TodoContext";
import TodoList from "./components/TodoList";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <TodoProvider>
      <CssBaseline />
      <TodoList />
    </TodoProvider>
  );
}

export default App;
