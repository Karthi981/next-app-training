"use client";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { Tooltip } from "@nextui-org/react";

type FormData = {
  email: string;
  password: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  //   console.log(watch("email"));
  //   console.log(errors);

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-orange-200 p-8 rounded shadow-lg w-[450px]">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={onSubmit}>
          <div className="mb-2">
            <label htmlFor="email" className="block text-">
              Email:
            </label>
            <input
              {...register("email", {
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Email is Invalid",
                },
                required: "Email is required",
              })}
              placeholder="Email"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <p className="text-red-400">{errors.email?.message}</p>
          <div className="mb-2">
            <label htmlFor="password" className="block text-gray-600">
              Password:
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
              type="password"
              placeholder="Password"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex flex-row">
            <div className="text-red-400"> {errors.password?.message}</div>
            <div className="p-2">
              <Tooltip
                content="Password must be at least 8 characters One Special,Uppercase character and Number"
                placement="left-end"
                key={"left-end"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M10 1a6 6 0 00-3.815 10.631C7.237 12.5 8 13.443 8 14.456v.644a.75.75 0 00.572.729 6.016 6.016 0 002.856 0A.75.75 0 0012 15.1v-.644c0-1.013.762-1.957 1.815-2.825A6 6 0 0010 1zM8.863 17.414a.75.75 0 00-.226 1.483 9.066 9.066 0 002.726 0 .75.75 0 00-.226-1.483 7.553 7.553 0 01-2.274 0z" />
                </svg>
              </Tooltip>
            </div>
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="text-gray-600">
              Remember Me
            </label>
          </div>
          <button
            type="submit"
            disabled={
              !watch("email") ||
              !watch("password") ||
              !!errors.email ||
              !!errors.password
            }
            className="bg-blue-500 text-white rounded px-4 py-2 @variants disabled:bg-slate-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
