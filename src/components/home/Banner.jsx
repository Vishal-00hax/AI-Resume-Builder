import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="w-full py-2.5 font-medium text-sm text-white bg-linear-to-r from-blue-400 via-green-500 to-purple-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 text-center">
          <span className="px-3 py-1 rounded-lg text-white bg-green-600 mr-2">
            New
          </span>
          <p>AI Resume Builder</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
