import React from "react";

const FormInputWrapper = ({ children, message, error, label, name }) => {
  return (
    <>
      <div className="mt-4 mb-0">
        <label for={name} class="block text-xs font-medium text-gray-700 mb-1">
          {label} <span className="text-red-600 ml-2">{error}</span>
        </label>

        {/* <label
          for={name}
          class={`relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm ${
            !!error
              ? "border-red-400 focus-within:border-red-400 focus-within:ring-red-400"
              : "focus-within:border-blue-600 focus-within:ring-blue-600"
          }  focus-within:ring-1 `}
        >
          <span class="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"></span>
        </label> */}
        {children}
      </div>
      <span className="ml-3 mb-4 text-xs text-slate-500">{message}</span>
    </>
  );
};

export default FormInputWrapper;
