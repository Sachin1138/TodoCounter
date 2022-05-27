import React from "react";
import { useState } from "react";
import Todo from "./Todo";
import TodoList from "./TodoList";
import "./index.css";
const TodoPage = () => {
  const [todoLists, setTodoLists] = useState([]);
  const onAdd = value => {
    setTodoLists(data => [value, ...data]);
  };
  return (
    <div className="container">
      <TodoList todoLists={todoLists} />
      <Todo onAdd={onAdd} />
    </div>
  );
};
export default TodoPage;
