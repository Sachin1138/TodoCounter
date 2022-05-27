import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoLists }) => {
  return (
    <div>
      {todoLists.map((res, key) => (
        <TodoItem todoItem={res} key={key} />
      ))}
    </div>
  );
};
export default TodoList;
