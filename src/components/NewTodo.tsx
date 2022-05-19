import React, { useRef } from "react";

import "./NewTodo.css";

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NeWToDo = (props: NewTodoProps) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todosubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    console.log(enteredText);
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todosubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef}></input>
      </div>
      <button type="submit">Add todo</button>
    </form>
  );
};

export default NeWToDo;
