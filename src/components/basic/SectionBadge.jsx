import React from 'react';

function SectionBadge({ children, className = '' }) {
  return (
    <span
      className={`inline-block border border-gray-300 rounded-full bg-gray-50 px-8 py-1 text-lg font-slim text-gray-500 tracking-wider ${className}`}
    >
      {children}
    </span>
  );
}

export default SectionBadge; 