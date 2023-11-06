"use client";
import { useAtom } from "jotai";
import React from "react";
import { addToDoAtom, newToDoAtom } from "../Store";

const TodoAdd = () => {
  const [newToDo, setNewToDo] = useAtom(newToDoAtom);
  const [, addToDo] = useAtom(addToDoAtom);
  return (
    <div className=" p-8 flex flex-row  items-center justify-center">
      <input
        autoComplete="false"
        placeholder="Add to Do Item"
        type="text"
        className=" w-48 p-8"
        style={{ backgroundColor: "white" }}
        onChange={(evt) => setNewToDo(evt.target.value)}
        value={newToDo}
      ></input>
      <button className="bg-blue-400 px-4 py-4" onClick={addToDo}>
        AddToDo
      </button>
    </div>
  );
};

export default TodoAdd;
