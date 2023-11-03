"use client";

const SubjectDropdown = () => {
  return (
    <div className="group grid grid-flow-col items-center justify-center absolute left-[120px]">
      <button className="hover:underline focus:outline-none px-2 py-2 ">
        Subjects
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6 absolute left-20 "
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>

      <div className="absolute hidden group-hover:block right-0 mt-2 bg-white border border-gray-300 w-48 shadow-md grid-cols-3">
        <div>
          <h1 className="text-xl p-1">Code</h1>
          <h2 className="text-xs text-gray-400 p-1">Flutter</h2>
          <h2 className="text-xs text-gray-400 p-1">Machine Learning</h2>
          <h2 className="text-xs text-gray-400 p-1">Node.js</h2>
          <h2 className="text-xs text-gray-400 p-1">Unity</h2>
        </div>
        <div>
          <h1></h1>
          <h2></h2>
        </div>
        <div>
          <h1></h1>
          <h2></h2>
        </div>
      </div>
    </div>
  );
};

export default SubjectDropdown;
