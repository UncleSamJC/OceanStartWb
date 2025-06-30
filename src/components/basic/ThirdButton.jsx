import React from 'react';
import { Link } from 'react-router-dom';
import Arrow45deg from './Arrow45deg';

function ThirdButton({ to, children, className = '' }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-300 bg-gray-50 text-gray-700 font-semibold shadow-sm overflow-hidden relative group transition-colors duration-300 ${className}`}
    >
      {/* 渐变滑块背景 */}
      <span className="absolute left-0 top-0 h-full w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-20 z-0"></span>
      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">{children}</span>
      <span className="inline-flex items-center justify-center w-7 h-7 bg-black rounded-full ml-2 relative z-10 transition-transform duration-500 group-hover:rotate-45">
        <Arrow45deg className="w-4 h-4 text-white" />
      </span>
    </Link>
  );
}

export default ThirdButton; 