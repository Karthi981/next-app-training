import React from "react";
import CourseTitle from "../Courses/components/CoursesTitle";
import ProfileSideBar from "./components/ProfileSideBar";
import EditingProfile from "./components/EditingProfilePage";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const IntroPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center ">
      <header className="pt-2">
        <CourseTitle />
      </header>
      <section className="flex flex-row h-[600px] py-8 ">
        <ProfileSideBar />
        <EditingProfile />
        <Button className="bg-red-400">
          <Link className="text-2xl text-black-500" href="/AdminPage">
            Admin Page
          </Link>
        </Button>
      </section>
    </div>
  );
};

export default IntroPage;
