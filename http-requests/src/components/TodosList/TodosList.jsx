import React from "react";
import TodoItem from "../TodoItem";

// import styles from "./TodosList.module.css";

const TodosList = ({ todos, deleteTodo, onUpdate }) => {
  return (
    <ul>
      {todos.map(({ title, link, id }) => (
        <TodoItem
          key={id}
          title={title}
          link={link}
          deleteTodo={() => deleteTodo(id)}
          updateTodo={() => onUpdate({ id, title: Date.now() })}
        />
      ))}
    </ul>
  );
};

export default TodosList;
