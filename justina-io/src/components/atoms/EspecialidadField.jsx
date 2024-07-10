import React, { useState } from 'react';

const EspecialidadField = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const options = ['Option 1', 'Option 2', 'Option 3']; 

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="space-y-2 relative">
      <label htmlFor="especialidad" className="block text-black">
        Especialidad
      </label>
      <button
        type="button"
        role="combobox"
        aria-expanded={isOpen}
        aria-autocomplete="none"
        dir="ltr"
        data-state={isOpen ? 'open' : 'closed'}
        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder-text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="especialidad"
        onClick={handleToggle}
      >
        <span style={{ pointerEvents: 'none' }}>
          {selectedOption || 'Seleccione una opción...'}
        </span>
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
      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelectOption(option)}
              className="cursor-pointer py-2 px-3 hover:bg-gray-200"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EspecialidadField;