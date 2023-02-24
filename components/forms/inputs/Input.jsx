import React from "react";

const Input = ({ type, onChange, onBlur, value, name, classes }) => {
  return (
    <input
      {...{
        type,
        onChange,
        onBlur,
        value,
        name,
        className: `mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm ${classes}`,
      }}
    />
  );
};

export default Input;
