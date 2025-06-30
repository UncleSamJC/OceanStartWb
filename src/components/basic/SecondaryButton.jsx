import React from 'react';
import { Link } from 'react-router-dom';
import Arrow45deg from './Arrow45deg'; 

const SecondaryButton = ({ text, to = "#", bgColor = "bg-white", className = "" }) => {
  return (
    <Link
      to={to}
      className={`relative group flex items-center justify-center border-2 border-gray-200 rounded-full w-[200px] h-10 overflow-hidden transition-all duration-300 ${bgColor} ${className}`}
    >
      {/* 渐变滑块背景 */}
      <span className="absolute left-0 top-0 h-full w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-80 z-0"></span>
      <span className="flex items-center space-x-2 relative z-10 transition-colors duration-300 group-hover:text-white">
        <span className="text-gray-900 group-hover:text-white transition-colors duration-300">{text}</span>
        <span className="inline-flex items-center justify-center w-7 h-7 bg-black rounded-full">
          <Arrow45deg className="h-4 w-4 text-white" />
        </span>
      </span>
    </Link>
  );
};

export default SecondaryButton; 