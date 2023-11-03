import React from "react";
import CourseComponents from "./CourseComponents";

const CourseCollections = () => {
  const cards = Array.from({ length: 8 }).map((_, index) => (
    <div key={index}>
      <CourseComponents />
    </div>
  ));

  return (
    <div className=" grid grid-flow-row  ">
      <div className=" ">{cards}</div>
    </div>
  );
};

export default CourseCollections;
