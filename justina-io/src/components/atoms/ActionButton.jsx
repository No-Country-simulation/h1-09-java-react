import React from 'react';

const ActionButton = ({ text, className }) => {
  return (
    <button className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 disabled:pointer-events-none disabled:opacity-50 ${className}`}>
      {text}
    </button>
  );
};

export default ActionButton;