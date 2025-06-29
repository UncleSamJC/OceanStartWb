import React from 'react';
import { Link } from 'react-router-dom';

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
        <span className="transform transition-transform duration-500 group-hover:translate-x-2 group-hover:rotate-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </span>
    </Link>
  );
};

export default SecondaryButton; 