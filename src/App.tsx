import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NeWToDo from "./components/NewTodo";

import "./App.css";

function App() {
  const [todos, setTodos] = useState<{ id: string; text: string }[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const toDoDeleteHandler = (todoId: string) => {
    setTodos((prevstate) => {
      return prevstate.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NeWToDo onAddTodo={todoAddHandler}></NeWToDo>
      <TodoList onDeletetodo={toDoDeleteHandler} items={todos}></TodoList>
    </div>
  );
}

export default App;
