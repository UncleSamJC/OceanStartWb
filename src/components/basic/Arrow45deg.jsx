import React from 'react';

function Arrow45deg({ className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
    >
      <path d="M10 6v2h12.59L6 24.59L7.41 26L24 9.41V22h2V6z" />
    </svg>
  );
}

export default Arrow45deg; 