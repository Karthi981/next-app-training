"use client";
import React from "react";
import { Rating, Typography } from "@material-tailwind/react";

const RatingWithText: React.FC = () => {
  const [rated, setRated] = React.useState(4);

  return (
    <div className="grid grid-rows-2 items-center  text-blue-gray-500 font-bold px-2 py-2 min-h-fit">
      <div className="grid grid-cols-2">
        <div>
          <Rating
            value={4}
            onChange={(value: number) => setRated(value)}
            className=""
          />
        </div>
        <div className="pl-14 text-gray-500">{rated}.2</div>
      </div>
      <Typography color="blue-gray" className="font-medium text-gray-500">
        154.1K Reviews
      </Typography>
    </div>
  );
};

export default RatingWithText;
