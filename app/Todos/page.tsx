import React from "react";
import TodoAdd from "./components/TodoAdd";
import TodosList from "./components/TodosList";

const Todos = () => {
  return (
    <div>
      <TodoAdd />
      <TodosList />
    </div>
  );
};

export default Todos;
