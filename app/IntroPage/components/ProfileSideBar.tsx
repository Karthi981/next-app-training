import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const ProfileSideBar = () => {
  return (
    <div className="border-solid border-1  border-gray-300  mx-4 flex flex-col w-72 items-center">
      <div className="items-center justify-center py-4">
        <Avatar className="h-24 w-24 ">
          <AvatarImage src="/" />
          <AvatarFallback className="bg-orange-900 text-4xl text-white">
            K
          </AvatarFallback>
        </Avatar>
        <h1 className="text-xl ">User Name</h1>
      </div>
      <div className="py-4 px-4 flex flex-col border-solid border-t-1 border-gray-300 w-72">
        <Button
          variant={"secondary"}
          className="px-8 py-8 border-solid border-t-1 border-gray-300 text-blue-600  bg-slate-50 rounded-none"
        >
          Progress
        </Button>
        <Button
          variant={"secondary"}
          className="px-8 py-8 border-solid border-t-1 border-gray-300 text-blue-600 bg-slate-50 rounded-none"
        >
          Edit Profile
        </Button>
        <Button
          variant={"secondary"}
          className="px-8 py-8 border-solid border-t-1 border-gray-300 text-blue-600 bg-slate-50 rounded-none"
        >
          Collections
        </Button>
        <Button
          variant={"secondary"}
          className="px-8 py-8 border-solid border-t-1 border-gray-300 text-blue-600 bg-slate-50 rounded-none"
        >
          Submitted
        </Button>
        <Button
          variant={"secondary"}
          className="px-8 py-8 border-solid border-t-1 border-gray-300 text-blue-600 border-b-1 bg-slate-50 rounded-none"
        >
          Teaches
        </Button>
      </div>
    </div>
  );
};

export default ProfileSideBar;
