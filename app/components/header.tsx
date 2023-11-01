import React from "react";

const Title: React.FC = () => {
  return (
    <div className=" text-gray-600  shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
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
        <div className="hidden md:flex space-x-3">
          <a href="#" className="hover:underline px-2 py-2">
            Subject
          </a>
          <a href="#" className="hover:underline px-2 py-2">
            Free Courses
          </a>
          <div className="relative group">
            <button className="hover:underline focus:outline-none px-2 py-2 ">
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
          <a href="#" className="hover:underline px-2 py-2 ">
            Login
          </a>
          <div className=" px-2 py-2 text-base font-semibold bg-red-500 text-white rounded-5 border-1 border-red-500 uppercase tracking-wider rounded-md">
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
