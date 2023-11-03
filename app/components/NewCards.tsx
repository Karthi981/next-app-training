import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const NewCards = () => {
  return (
    <Link href="/Courses">
      <Card className="max-w-[299px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-[255px]">
        <CardDescription>
          <img
            className="rounded-t-lg"
            src="https://coursesity.com/assets/images/udemy-free.png"
            alt=""
          />
        </CardDescription>
        <CardContent className="p-5">
          <p className="mb-2 text-[18px] font-medium tracking-tight text-gray-900 dark:text-white">
            15,000+ Free Udemy Courses
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default NewCards;
