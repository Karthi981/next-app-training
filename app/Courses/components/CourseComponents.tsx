import React from "react";

import { Button } from "@/components/ui/button";
import RatingText from "./Ratings";

const CourseComponents = () => {
  return (
    <div className="py-8 border-solid border-t-2 border-gray-300 grid grid-cols-2 h-44 relative ">
      <div className="grid-rows-2 grid w-20  ">
        <img
          className="rounded-t-lg " // Apply w-full to make the image take full width
          src="https://i.udemycdn.com/course/480x270/2542078_6708_2.jpg"
          alt=""
        />
        <Button
          className="bg-white hover:bg-violet-600 hover:text-white text-black shadow-lg mt-8 absolute top-14"
          variant={"secondary"}
        >
          + SAVE
        </Button>
      </div>
      <div className="grid grid-rows-2 absolute left-32 py-4">
        <h1 className="flex font-bold hover:underline">
          React Fullstack with node/express, PostgreSQL and AWS Cryptocurrency
          Algorithmic Trading + 50 Robots Monthly
        </h1>
        <h2 className="text-gray-500">
          Learn how to setup a React Fullstack app on AWS with a PostgreSQL
          database - Free Course
        </h2>
        <div className="relative">
          <RatingText />
          <Button className="absolute left-[175px] top-[-2px] w-[75px] h-6 bg-blue-500 rounded-2xl">
            English
          </Button>
          <Button className="w-[75px] h-6 bg-green-500 absolute left-[275px] top-[-2px] rounded-2xl ">
            Free Trial
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseComponents;
