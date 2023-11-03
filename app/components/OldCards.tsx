import React from "react";

const Cards: React.FC = () => {
  return (
    <div className="max-w-[299px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-[255px]">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://coursesity.com/assets/images/udemy-free.png"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-[18px] font-medium tracking-tight text-gray-900 dark:text-white">
            15,000+ Free Udemy Courses
          </h5>
        </a>
      </div>
    </div>
  );
};

export default Cards;
