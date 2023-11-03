import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import RatingWithText from "./ratings";

const NewRatingCards = () => {
  return (
    <Card className="max-w-[299px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-fit">
      <CardDescription>
        <a href="#">
          <img
            className="rounded-t-lg"
            src="https://i.udemycdn.com/course/480x270/438522_500f_6.jpg"
            alt=""
          />
        </a>
      </CardDescription>
      <CardContent className="p-5">
        <a href="#">
          <h5 className=" text-[18px] h-[100px] p-5 font-medium tracking-tight text-gray-900 dark:text-white">
            Intro Into Data Science
          </h5>
        </a>
        <div className="border-t-2 border-gray-400 border-solid "></div>
      </CardContent>
      <CardFooter className="h-[80px] grid grid-cols-2 max-w-fit ">
        <div>
          <RatingWithText />
        </div>
        <div className="px-4 py-4">
          <button className="float-right border-solid hover:bg-blue-600 hover:text-white border-black border-2 px-2 py-2 hover:border-none text-xs">
            +SAVE
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default NewRatingCards;
