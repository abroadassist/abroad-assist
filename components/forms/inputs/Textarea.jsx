import React from "react";

const Textarea = ({ onChange, onBlur, value, name, classes }) => {
  return (
    <textarea
      {...{
        onChange,
        onBlur,
        value,
        name,
        className: `mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm h-24 ${classes}`,
      }}
    />
  );
};

export default Textarea;
