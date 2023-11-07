"use client";
import { useAtom } from "jotai";
import React from "react";
import {
  removeTodoAtom,
  todosAtom,
  toggleTodoAtom,
  updateTodoAtom,
} from "@/app/Store";

const TodosList = () => {
  const [todos] = useAtom(todosAtom);
  const [, toggleTodo] = useAtom(toggleTodoAtom);
  const [, removeTodo] = useAtom(removeTodoAtom);
  const [, updateTodo] = useAtom(updateTodoAtom);

  console.log(todos);
  return (
    <div className="flex flex-col items-center justify-center p-4">
      {todos.map((todo) => (
        <div className="w-96 ">
          <input
            key={todo.id}
            className="form-check-input"
            type="checkbox"
            value=""
            checked={todo.done}
            onChange={(evt) =>
              updateTodo({ id: todo.id, text: evt.target.value })
            }
          ></input>
          <li key={todo.id} className=" flex flex-col">
            <p>{todo.text}</p>
          </li>
          <button key={todo.id} onClick={() => removeTodo(todo.id)}>
            DeleteToDo
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodosList;
