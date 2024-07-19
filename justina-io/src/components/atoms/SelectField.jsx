import React from 'react';

const SelectField = ({ label, id, placeholder }) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block">
        {label}
      </label>
      <button
        type="button"
        role="combobox"
        aria-controls="radix-:rc:"
        aria-expanded="false"
        aria-autocomplete="none"
        dir="ltr"
        data-state="closed"
        data-placeholder=""
        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder-text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id={id}
      >
        <span style={{ pointerEvents: 'none' }}>{placeholder}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-down h-4 w-4 opacity-50"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>
    </div>
  );
};

export default SelectField;