import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneIntl = ({ value = "+91", onBlur = null, onChange = null }) => {
  return (
    <PhoneInput
      {...{
        country: "us",
        value,
        onChange,
        onBlur,
        inputClass: `mt-0 w-full rounded-md border-gray-200 shadow-sm sm:text-sm`,
      }}
    />
  );
};

export default PhoneIntl;
