/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { forwardRef } from 'react';

const InputField = forwardRef(({ label, id, placeholder, type, ...props }, ref) => (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-black">
        {label}
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id={id}
        ref={ref}
        {...props}
        placeholder={placeholder}
        type={type}      
        
        />
    </div>
 ));


export default InputField;