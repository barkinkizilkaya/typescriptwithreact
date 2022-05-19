import React from "react";

import "./TodoList.css";

interface ToDoListProps {
  items: { id: string; text: string }[];
  onDeletetodo: (id: string) => void;
}

const TodoList = (props: ToDoListProps) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.onDeletetodo.bind(null, todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
