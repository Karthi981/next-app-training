"use client";
import { Checkbox } from "@/components/ui/checkbox";

interface Props {
  Name: string;
}

const Sidebarcheckbox = ({ Name }: Props) => {
  return (
    <div className=" space-x-2 ">
      <Checkbox className="border-gray-400" />
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-400">
        {Name}
      </label>
    </div>
  );
};

export default Sidebarcheckbox;
