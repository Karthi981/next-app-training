// pages/login.tsx
"use client";
import React, { useState, useEffect } from "react";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    emailerror: "",
    passworderror: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { email, password, emailerror } = formData;
  useEffect(() => {
    validateForm();
  }, [email, password]);

  function validateForm() {
    let errors: { [key: string]: string } = {};

    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid.";
    }

    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    setErrors(errors);
  }
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    if (type === "email") {
      setFormData({
        ...formData,
        email: e.target.value,
      });
    } else {
      setFormData({
        ...formData,
        password: e.target.value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-orange-200 p-8 rounded shadow-lg w-96">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e, "email")}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={(e) => handleChange(e, "password")}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          {errors.password && <p className="text-red-500">{errors.password}</p>}
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
            className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-green-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
