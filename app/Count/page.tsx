"use client";
import { atom, useAtom } from "jotai";
import React from "react";
import { countAtom } from "../feautures/counter/store";

const Count = () => {
  const [count, setCount] = useAtom(countAtom);

  return (
    <div>
      <h1 className="px-5 py-5 items-center justify-center ">Counter App</h1>
      <p>Count:{count} </p>
      <button
        className="items-center justify px-5 py-5"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        className="items-center justify px-5 py-5 "
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default Count;
