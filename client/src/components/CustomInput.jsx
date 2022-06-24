import React from "react";

const CustomInput = ({
  name,
  inputLabel,
  placeholder,
  inputColor,
  onChangeProp,
}) => {
  return (
    <div>
      <label className="label">{inputLabel}</label>
      <input
        name={name}
        onChange={onChangeProp}
        type="text"
        placeholder={placeholder}
        className={`input ${inputColor} w-full input-lg `}
      />
    </div>
  );
};

export default CustomInput;
