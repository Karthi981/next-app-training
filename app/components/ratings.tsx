"use client";
import React from "react";
import { Rating, Typography } from "@material-tailwind/react";

const RatingWithText: React.FC = () => {
  const [rated, setRated] = React.useState(4);

  return (
    <div className="grid grid-rows-2 items-center text-blue-gray-500 font-bold px-2 py-2 ">
      <div className="grid grid-cols-2">
        <div>
          <Rating
            value={4}
            onChange={(value: number) => setRated(value)}
            className="grid grid-flow-col w-24 text-yellow-500"
          />
        </div>
        <div className="pl-16 text-gray-500">{rated}.2</div>
      </div>
      <Typography color="blue-gray" className="font-medium text-gray-500 ">
        154.1K Reviews
      </Typography>
    </div>
  );
};

export default RatingWithText;
