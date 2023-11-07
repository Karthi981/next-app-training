"use client";
import { profileDataAtom } from "@/app/feautures/coursesity/store";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAtom } from "jotai";
import React from "react";

const EditingProfile = () => {
  const [profile, setProfile] = useAtom(profileDataAtom);

  const handleData = (
    evt: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    switch (type) {
      case "firstName":
        setProfile({ ...profile, firstName: evt.target.value });
        break;
      case "lastName":
        setProfile({ ...profile, lastName: evt.target.value });
        break;
      case "email":
        setProfile({ ...profile, email: evt.target.value });
        break;
      case "bio":
        setProfile({ ...profile, bio: evt.target.value });
        break;
      default:
        break;
    }
  };
  return (
    <div className="justify-end items-end">
      <div className="flex flex-col items-center  w-[600px]">
        <div className="justify-center items-center">
          <Avatar className="h-24 w-24  ">
            <AvatarImage src="/" />
            <AvatarFallback className="bg-orange-900 text-4xl text-white">
              K
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="grid  items-center gap-1.5 py-4 ">
          <Input id="picture" type="file" className="" />
        </div>
        <div className="grid grid-flow-col gap-8">
          <div className="">
            <Label className="text-gray-400">First Name</Label>
            <Input
              type="First Name"
              placeholder="First Name"
              className="w-64 border-solid border-1 border-blue-700"
              onChange={(evt) => handleData(evt, "firstName")}
            />
          </div>
          <div className="">
            <Label className="text-gray-400">Last Name</Label>
            <Input
              type="Last Name"
              placeholder="Last Name"
              className="w-64 border-solid border-1 border-blue-700"
              onChange={(evt) => handleData(evt, "lastName")}
            />
          </div>
        </div>
        <div className="grid grid-flow-col gap-8 py-8">
          <div className="">
            <Label className="text-gray-400">Email</Label>
            <Input
              type="email"
              placeholder="Email"
              className="w-64 border-solid border-1 border-blue-700"
              onChange={(evt) => handleData(evt, "email")}
            />
          </div>
          <div className="w-64"></div>
        </div>
        <div className="w-full ml-14">
          <Label className="text-gray-400">BIO (MAX. 40 CHARACTERS)</Label>
          <Input
            type="bio"
            placeholder="Bio"
            className="w-full border-solid border-1 border-blue-700"
            onChange={(evt) => handleData(evt, "bio")}
          />
        </div>
      </div>
      <div className="justify-end items-end flex flex-row py-8">
        <div className="px-4">
          <Button
            variant={"secondary"}
            className="border-solid border-1 border-gray-300 bg-slate-50 text-blue-700"
          >
            CANCEL
          </Button>
        </div>
        <div>
          <Button
            variant={"secondary"}
            className="border-solid border-1 border-gray-300 bg-purple-700 text-white"
          >
            SUBMIT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditingProfile;
