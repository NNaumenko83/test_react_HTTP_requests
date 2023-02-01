import React from "react";

// import styles from "./TodoItem.module.css";

const TodoItem = ({ title, link, deleteTodo, updateTodo }) => {
  return (
    <li>
      <p>{title}</p>
      <p>{link}</p>
      <button type="button" onClick={deleteTodo}>
        Delete
      </button>
      <button type="button" onClick={updateTodo}>
        Update
      </button>
    </li>
  );
};

export default TodoItem;
