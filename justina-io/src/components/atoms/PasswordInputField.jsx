import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const PasswordInputField = ({ label, id, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-black">
        {label}
      </label>
      <div className="relative">
        <input
          className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          id={id}
          placeholder={placeholder}
          type={showPassword ? 'text' : 'password'}
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
          {showPassword ? <AiFillEyeInvisible className="h-5 w-5 text-muted-foreground" /> : <AiFillEye className="h-5 w-5 text-muted-foreground" />}
        </div>
      </div>
    </div>
  );
};

export default PasswordInputField;