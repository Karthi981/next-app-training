import React from "react";
import CourseComponents from "./CourseComponents";

const CourseCollections = () => {
  const cards = Array.from({ length: 12 }).map((_, index) => (
    <div key={index}>
      <CourseComponents />
    </div>
  ));

  return (
    <div className=" grid grid-flow-row w-[910px]">
      <div className=" ">{cards}</div>
    </div>
  );
};

export default CourseCollections;
