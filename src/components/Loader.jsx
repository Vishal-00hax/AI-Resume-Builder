import React from "react";

function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-5">
        {/* Spinner ring */}
        <div className="relative h-20 w-20">
          {/* Background ring */}
          <div className="absolute inset-0 rounded-full border-4 border-gray-200/60" />

          {/* Spinning gradient ring */}
          <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-r-indigo-500 border-b-indigo-300 border-l-transparent animate-spin" />

          {/* Optional inner glow – fixed gradient class */}
          <div className="absolute inset-2 rounded-full bg-linear-to-br from-indigo-100 to-transparent opacity-30" />
        </div>

        {/* Loading text with pulse */}
        <p className="text-sm font-medium text-gray-600 animate-pulse">
          Loading<span className="animate-pulse">...</span>
        </p>
      </div>
    </div>
  );
}

export default Loader;
