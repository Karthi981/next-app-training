"use client";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import React from "react";
import { useForm } from "react-hook-form";
import { useAtom } from "jotai";
import { formDataAtom, profileDataAtom } from "../Store";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
  userName: string;
};

const ResetPage = () => {
  const [details, setDetails] = useAtom(profileDataAtom);
  const [formData, setFormData] = useAtom(formDataAtom);
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
      title: "Your Password is Reset" + firstName,
      description: "Email ID:" + data.email,
      action: <ToastAction altText="Goto schedule to undo">Ok</ToastAction>,
    });
    setFormData((prevData) => ({
      ...prevData,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    }));
  });
  return (
    <div className="min-h-screen items-start justify-center flex mt-8">
      <form onSubmit={onSubmit}>
        <div className="flex flex-col bg-red-100 w-[700px] px-4 py-4 border-solid border-2 border-red-200 ">
          <p className="text-xl text-black underline pb-8">
            {firstName}Do you want to reset your Password
          </p>
          <Label className="text-sm text-gray-400 py-2">Your Email Id is</Label>
          <Input
            {...register("email", {
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Email is Invalid",
              },
              required: "Email is required",
            })}
            // value={email}
            className="py-2"
            placeholder="Enter the Email Id"
          />
          <p className="text-red-400 py-2">{errors.email?.message}</p>
          <label className="block mb-2 text-sm font-medium text-gray-400 dark:text-white">
            Password
          </label>
          <input
            {...register("password", {
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "At least one Number,Uppercase and Special Symbol required",
              },
            })}
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <p className="text-red-400 py-2">{errors.password?.message}</p>
          <div>
            <label className="block mb-2 text-sm font-medium  text-gray-400 dark:text-white">
              Confirm password
            </label>
            <input
              {...register("confirmPassword", {
                required: "Password is required",
                validate: (val: string) => {
                  if (watch("password") != val) {
                    return "Your passwords do no match";
                  }
                },
              })}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <p className="text-red-400 py-2">
              {errors.confirmPassword?.message}
            </p>
            <div className="py-4">
              {" "}
              <Button
                disabled={!!errors.email || !!errors.userName}
                type="submit"
                className="px-4 py-4 w-48"
              >
                Reset Password
              </Button>
              <Toaster />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetPage;
