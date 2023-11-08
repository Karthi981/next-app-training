"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useAtom } from "jotai";
import { formDataAtom } from "../Store";

type FormData = {
  Email: string;
  Password: string;
  ConfirmPassword: string;
  PhoneNumber: string;
};

const SignupPage = () => {
  const [formData, setFormData] = useAtom(formDataAtom);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    setFormData((prevData) => ({
      ...prevData,
      email: data.Email,
      password: data.Password,
      confirmPassword: data.ConfirmPassword,
      phoneNumber: data.PhoneNumber,
    }));
  });
  return (
    <div className="bg-orange-300 dark:bg-gray-900 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-green-600 md:text-2xl dark:text-white ">
              Create An account
            </h1>
            <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-green-600 dark:text-white"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  {...register("Email", {
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Email is Invalid",
                    },
                    required: "Email is required",
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                />
                <p className="text-red-400 py-2">{errors.Email?.message}</p>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-green-600 dark:text-white">
                  Password
                </label>
                <input
                  {...register("Password", {
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
                <p className="text-red-400 py-2">{errors.Password?.message}</p>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-green-600 dark:text-white">
                  Confirm password
                </label>
                <input
                  {...register("ConfirmPassword", {
                    required: "Password is required",
                  })}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div>
                  <label className="block mb-2 py-2 text-sm font-medium text-green-600 dark:text-white">
                    First Name
                  </label>
                  <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-green-600 dark:text-white py-2">
                    Last Name
                  </label>
                  <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div>
                  <label className="block mb-2 py-2 text-sm font-medium text-green-600 dark:text-white">
                    Phone Number
                  </label>
                  <input
                    {...register("PhoneNumber", {
                      required: "phoneNumber is required",
                      pattern: {
                        value: /^([+]\d{2}[ ])?\d{10}$/,
                        message:
                          "Phone Number should have 10 numbers and country code ",
                      },
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <p className="text-red-400 py-2">
                    {errors.PhoneNumber?.message}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-light text-green-600 dark:text-gray-300">
                    I accept the Terms and Conditions
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={
                  !watch("Email") ||
                  !watch("ConfirmPassword") ||
                  !watch("PhoneNumber") ||
                  !watch("Password")
                }
                className="w-full bg-blue-400 py-2 rounded-xl"
              >
                Create an Account
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  href="/SignIn"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500 hover:text-green-500"
                >
                  Sign In here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
