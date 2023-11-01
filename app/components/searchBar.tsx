"use client";

import React from "react";
import { useState } from "react";
import {
  filterItems,
  getItemIndex,
  renderJsonStructure,
  useHandleOpenCommandPalette,
} from "react-cmdk";
import CommandPalette from "react-cmdk";

function SearchBar() {
  const [open, setOpen] = useState<boolean>(true);
  const [search, setSearch] = useState("");

  useHandleOpenCommandPalette(setOpen);
  const filteredItems = filterItems(
    [
      {
        id: "home",
        items: [
          {
            id: "React Courses",
            children: "React Courses",
          },
          {
            id: "React:FC",
            children: "React:FC",
          },
          {
            id: "What is React?",
            children: "What is React?",
            closeOnSelect: false,
          },
          {
            id: "More Courses",
            children: "More Courses",
            closeOnSelect: false,
          },
          {
            id: "Read about next.js",
            children: "Read about next.js",
            closeOnSelect: false,
          },
        ],
      },
    ],
    search
  );
  return (
    <CommandPalette
      onChangeSearch={setSearch}
      onChangeOpen={setOpen}
      search={search}
      isOpen={open}
    >
      {filteredItems.map((list, index) => (
        <div className=" flex-auto ring-black">
          <CommandPalette.List key={list.id} heading={list.heading}>
            {list.items.map((item) => (
              <CommandPalette.ListItem
                key={Math.random()}
                index={getItemIndex(filteredItems, item.id)}
                {...item}
              />
            ))}
          </CommandPalette.List>
        </div>
      ))}
    </CommandPalette>
  );
}

export default SearchBar;
