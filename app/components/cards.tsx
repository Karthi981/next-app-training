import React from "react";

const Cards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      <div className="bg-white border border-gray-300 p-4 rounded-lg shadow-lg"></div>
    </div>
  );
};

export default Cards;
