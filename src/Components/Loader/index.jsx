import React from 'react';
import { FaVoteYea } from 'react-icons/fa'; // Political survey icon

const Loader = () => {
  return (
    <div className="flex items-center top-[40%] absolute z-50 bg-white w-[600px] rounded-[14px] border-black border-2 ease-in-out p-3 left-[40%] justify-center ">
      <div className="flex items-center gap-4">
        {/* Animated icon */}
         <FaVoteYea className="text-6xl text-[#0b9941] animate-ping" />
        {/* Text */}
        <div className="text-xl font-bold text-nowrap text-gray-800 flex items-center">
          Loading...
          {/* Animated Dots */}
          <div className="ml-2 flex">
            <span className="dot animate-bounce">.</span>
            <span className="dot animate-bounce delay-200">.</span>
            <span className="dot animate-bounce delay-400">.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
