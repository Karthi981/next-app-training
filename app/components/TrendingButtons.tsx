import React from "react";

interface Props {
  Name: string;
}

const TrendingButtons = ({ Name }: Props) => {
  return (
    <div className="max-w-fit   px-2 py-2  rounded-s-md">
      <button className="border-gray-400 border-3 px-4 py-4 border-solid hover:bg-violet-600 hover:text-white hover:border-none shadow-xl ">
        {Name}
      </button>
    </div>
  );
};

export default TrendingButtons;
