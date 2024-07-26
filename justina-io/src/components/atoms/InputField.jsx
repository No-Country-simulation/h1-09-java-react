import React from 'react';

const InputField = ({ label, id, placeholder, type = 'text' }) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-black">
        {label}
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id={id}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default InputField;