import React from "react";
import Cards from "./OldCards";
import NewCards from "./NewCards";

const CourseCollection: React.FC = () => {
  const cards = Array.from({ length: 4 }).map((_, index) => (
    <div key={index}>
      <NewCards />
    </div>
  ));

  return (
    <div className="absolute top-[740px] items-center justify-center grid">
      <div>
        <div className="font-bold text-3xl pb-2">Course Collections</div>
        <div className="grid grid-cols-4 gap-6">{cards}</div>
      </div>
    </div>
  );
};

export default CourseCollection;
