"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToastAction } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import React from "react";
import { useForm } from "react-hook-form";
import { countAtom } from "../feautures/counter/store";
import { useAtom } from "jotai";
import { profileDataAtom } from "../Store";

type FormData = {
  email: string;
  userName: string;
};

const AdminPage = () => {
  const [details, setDetails] = useAtom(profileDataAtom);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const { email, firstName } = details;
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    toast({
      title: "Verification Sent to " + data.userName,
      description: "Email Id:" + data.email,
      action: <ToastAction altText="Goto schedule to undo">Ok</ToastAction>,
    });
  });

  return (
    <div className="min-h-screen items-start justify-center flex mt-8">
      <form onSubmit={onSubmit}>
        <div className="flex flex-col bg-slate-100 w-[700px] px-4 py-4 border-solid border-2 border-slate-200">
          <Label className="text-xl text-gray-400 py-2">
            Enter your Email Id
          </Label>
          <Input
            {...register("email", {
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Email is Invalid",
              },
              required: "Email is required",
            })}
            value={email}
            className="py-2"
            placeholder="Enter the Email Id"
          />
          <p className="text-red-400 py-2">{errors.email?.message}</p>
          <Label className="text-xl text-gray-400 py-2">
            Enter the User name
          </Label>
          <Input
            {...register("userName", {
              required: "UserName is required",
            })}
            className="px-2 py-2"
            placeholder="Enter the User name"
            value={firstName}
          />
          <p className="text-red-400 py-2">{errors.userName?.message}</p>
          <div className="py-4">
            {" "}
            <Button
              disabled={!!errors.email || !!errors.userName}
              type="submit"
              className="px-4 py-4 w-48"
            >
              Send Verification
            </Button>
            <Toaster />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminPage;
