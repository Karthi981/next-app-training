import React from "react";
import RatingWithText from "./ratings";

const RatingCard: React.FC = () => {
  return (
    <div className="relative max-w-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-fit">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://i.udemycdn.com/course/480x270/438522_500f_6.jpg"
          alt=""
        />
      </a>
      <div className="">
        <a href="#">
          <h5 className=" text-[18px] h-[100px] p-5 font-medium tracking-tight text-gray-900 dark:text-white">
            Intro Into Data Science
          </h5>
        </a>
        <div className="border-t-2 border-gray-400 border-solid "></div>
        <div className="h-[80px] grid grid-cols-2 min-w-fit w-32">
          <div>
            <RatingWithText />
          </div>
          <div className="px-6 py-6">
            <button className="float-right border-solid hover:bg-blue-600 hover:text-white border-black border-2 px-2 py-2 hover:border-none text-xs">
              +SAVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
