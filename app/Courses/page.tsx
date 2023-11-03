import React from "react";
import CourseCollections from "./components/CourseCollections";
import RatingSideBar from "./components/Sidebar";
import Subjects from "./components/Subjects";
import CourseTitle from "./components/CoursesTitle";
const CoursesPage = () => {
  return (
    <div className=" justify-center grid grid-flow-row pb-8 m-2 ">
      <div>
        <CourseTitle />
      </div>
      <div className="  w-[1200px] ">
        <div className=" pt-8  mb-10 h-36 border-b-1 border-solid border-gray-400   ">
          <h1 className="text-3xl font-bold">'react'</h1>
        </div>
        <div className="grid grid-cols-2 relative ">
          <RatingSideBar />
          <div className="grid grid-flow-row space-x-4">
            <Subjects />

            <div className="absolute left-72 top-36">
              <CourseCollections />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
