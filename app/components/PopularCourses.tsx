import React from "react";

import NewRatingCards from "./NewRatingCards";

const PopularCourses: React.FC = () => {
  const cards = Array.from({ length: 12 }).map((_, index) => (
    <div key={index}>
      <NewRatingCards />
    </div>
  ));

  return (
    <div className="absolute top-[1080px] w-[1270px] pb-8">
      <div>
        <div className="font-bold text-3xl pb-2">Popular Courses</div>
        <div className="grid grid-cols-4 gap-6 grid-rows-3">{cards}</div>
      </div>
    </div>
  );
};

export default PopularCourses;
