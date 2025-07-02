import React from 'react';
import { Link } from 'react-router-dom';
import { trackButtonClick } from '../../lib/analytics';

const PrimaryButton = ({ text, to = "#", bgColor = "bg-white", showDot = true }) => {
  const handleClick = () => {
    trackButtonClick(text, window.location.pathname);
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={`ml-4 relative group flex items-center justify-center border-2 border-gray-200 rounded-full w-[200px] h-10 hover:h-[45px] hover:border-blue-500 transition-all duration-300 ${bgColor}`}
    >
      <div className="flex items-center space-x-2">
        {showDot && <span className="w-2 h-2 bg-green-500 rounded-full"></span>}
        <span className="text-gray-900">{text}</span>
        <div className="transform transition-transform group-hover:translate-x-1">
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
        </div>
      </div>
    </Link>
  );
};

export default PrimaryButton; 