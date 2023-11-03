"use client";
import { Rating } from "@material-tailwind/react";
import { useState } from "react";

const RatingText: React.FC = () => {
  const [rated, setRated] = useState(4);

  return (
    <div className="grid grid-rows-2 items-center text-blue-gray-500 font-bold  ">
      <div className="grid grid-cols-2">
        <div>
          <Rating
            value={4}
            onChange={(value: number) => setRated(value)}
            className="grid grid-flow-col w-24 text-yellow-500 relative"
          />
        </div>
        <div className="pl-16 text-gray-500  absolute left-16">{rated}.2</div>
      </div>
    </div>
  );
};

export default RatingText;
