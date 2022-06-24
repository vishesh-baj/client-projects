import React from "react";

const CustomButton = ({ btnTitle, btnText, btnBgColor, btnSize }) => {
  return (
    <button className={`btn border-none  ${btnText} ${btnBgColor} ${btnSize}`}>
      {btnTitle}
    </button>
  );
};

export default CustomButton;
