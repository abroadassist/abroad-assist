import React from "react";

const FormInputWrapper = ({ children, message, error, label, name }) => {
  return (
    <>
      <div className="mt-4 mb-0">
        <label
          htmlFor={name}
          class="block text-xs font-medium text-gray-700 mb-1"
        >
          {label} <span className="text-red-600 ml-2">{error}</span>
        </label>
        {children}
      </div>
      <span className="ml-3 mb-4 text-xs text-slate-500">{message}</span>
    </>
  );
};

export default FormInputWrapper;
