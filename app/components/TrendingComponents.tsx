import React from "react";
import TrendingButtons from "./TrendingButtons";

const TrendingComponents: React.FC = () => {
  let Names: string[] = [
    "Python",
    "Flutter",
    "Java",
    "React",
    "AWS",
    "JavaScript",
    "DataScience",
    "Excel",
    "Development",
    "Design",
    "Engineering",
  ];

  return (
    <div className="absolute top-[520px]">
      <h1 className="font-bold py-3 text-3xl">Trending Courses</h1>
      <div className="grid grid-cols-8 grid-rows-2 px-2">
        {Names.map((name) => (
          <TrendingButtons Name={name}></TrendingButtons>
        ))}
      </div>
    </div>
  );
};

export default TrendingComponents;
