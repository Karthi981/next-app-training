import React from "react";
import CourseTitle from "../Courses/components/CoursesTitle";
import ProfileSideBar from "./components/ProfileSideBar";
import EditingProfile from "./components/EditingProfilePage";

const IntroPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center ">
      <header className="pt-2">
        <CourseTitle />
      </header>
      <section className="flex flex-row h-[600px] py-8 ">
        <ProfileSideBar />
        <EditingProfile />
      </section>
    </div>
  );
};

export default IntroPage;
