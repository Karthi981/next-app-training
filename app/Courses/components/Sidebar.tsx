import React from "react";
import Sidebarcheckbox from "./Sidebarcheckbox";

const RatingSideBar = () => {
  return (
    <div className="flex-row w-[280px]  mr-8 ">
      <h1 className="text-3xl py-6">Subjects</h1>
      <h2 className="text-3xl py-6">Courses</h2>
      <div className="h-[400px] bg-gray-100 grid grid-flow-row pt-2 pl-6">
        <h1 className="text-gray-600">Price</h1>
        <Sidebarcheckbox Name="Discount Offer (31)"></Sidebarcheckbox>
        <Sidebarcheckbox Name="Free (24)"></Sidebarcheckbox>
        <Sidebarcheckbox Name="Free Trial (36)"></Sidebarcheckbox>
        <h1 className="text-gray-600">Language</h1>
        <Sidebarcheckbox Name="English (347)"></Sidebarcheckbox>
        <Sidebarcheckbox Name="Spanish (6)"></Sidebarcheckbox>
        <Sidebarcheckbox Name=" Hindi (2)"></Sidebarcheckbox>
        <Sidebarcheckbox Name="Portuguese (2)"></Sidebarcheckbox>
      </div>
    </div>
  );
};

export default RatingSideBar;
