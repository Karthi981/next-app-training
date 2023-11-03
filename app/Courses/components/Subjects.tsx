import React from "react";

const Subjects = () => {
  return (
    <div className="grid grid-flow-col space-x-7 py-8 items-start justify-start absolute left-[300px]">
      <div className="grid grid-flow-col ">
        <img
          className=" h-[48px]"
          src="https://res.cloudinary.com/db194k5td/image/upload/v1510723844/redux_logo_qdv0t9.svg"
          alt=""
        />
        <h1 className="text-center p-4">React Js</h1>
      </div>
      <div className="grid grid-flow-col">
        <img
          className=" h-[48px]"
          src="https://res.cloudinary.com/db194k5td/image/upload/v1510723817/react_logo_mwqsh9.svg"
          alt=""
        />
        <h1 className="text-center p-4">React Native</h1>
      </div>
    </div>
  );
};

export default Subjects;
