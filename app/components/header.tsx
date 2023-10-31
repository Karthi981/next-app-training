import React from "react";

const Title: React.FC = () => {
  return (
    <div className="bg-white text-gray-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <img
            _ngcontent-app-root-c69
            src="assets/images/logo.png"
            alt="coursesity"
            width="142"
            height="32"
            className="img-fluid"
          />
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:underline">
            Subject
          </a>
          <a href="#" className="hover:underline">
            Free Courses
          </a>
          <div className="relative group">
            <button className="hover:underline focus:outline-none">
              Courses
            </button>
            <div className="absolute hidden group-hover:block right-0 mt-2 bg-white border border-gray-300 w-48 shadow-md">
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
              >
                Free Courses
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
              >
                Universities
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
              >
                Best Courses
              </a>
            </div>
          </div>
          <a href="#" className="hover:underline">
            Login
          </a>
        </div>
        <div className="inline-block px-6 py-2 text-base font-semibold bg-red-500 text-white rounded-5 border-1 border-red-500 uppercase tracking-wider rounded-md">
          <button>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Title;
