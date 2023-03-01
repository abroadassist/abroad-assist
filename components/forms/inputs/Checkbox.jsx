import React from "react";

const Checkbox = ({
  options,
  name,
  values,
  onChange,
  onBlur,
  inline = false,
}) => {
  return (
    <div className={`flex ${!!inline ? "flex-row flex-wrap" : "flex-col"}`}>
      {options?.map((option) => (
        <label key={option?.id} className="m-2">
          <input
          className="mr-2 rounded border-slate-600 cursor-pointer checked:ring-1 ring-blue-600 checked:bg-blue-500"
            {...{
              type: "checkbox",
              name,
              value: option?.value,
              checked: values?.includes(option?.value),
              onChange,
              onBlur,
            }}
          />
          {option?.label ?? option?.value}
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
