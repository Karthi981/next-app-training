import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const Coursebuttons = () => {
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
    "AWS",
    "JavaScript",
    "DataScience",
    "Excel",
    "Development",
    "Design",
    "Engineering",
  ];
  return (
    <div className="container grid grid-cols-2 px-2 pb-8">
      <div className="grid-cols-4 grid-rows-5 gap-3 min-w-fit w-[620px]  grid ">
        {Names.map((name) => (
          <Button
            variant={"secondary"}
            key={name}
            className=" bg-white flex max-w-fit hover:bg-blue-500 text-black rounded-md border-2 border-black/40 border-solid text-[18px]"
          >
            {name}
          </Button>
        ))}
      </div>
      <div>
        <Card className=" absolute left-[660px] w-[350px] items-center justify-center grid grid-row-3 bg-blue-100">
          <CardHeader className="justify-center">
            <CardTitle className="text-blue-400">
              Learn with the best Udemy courses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>We have curated the best Udemy courses of all the time.</p>
          </CardContent>
          <CardFooter>
            <Button
              className="bg-blue-600 hover:bg-blue-400 text-white"
              variant={"secondary"}
            >
              View Courses
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Coursebuttons;
