import { Button } from "@/components/ui/button";
import React from "react";

interface Props {
  Name: string;
}

const TrendingButtons = ({ Name }: Props) => {
  return (
    <Button
      className="border-gray-400 border-2 px-3 py-3 border-solid hover:bg-violet-600 hover:text-white hover:border-none shadow-xl "
      variant={"secondary"}
    >
      {Name}
    </Button>
  );
};

export default TrendingButtons;
