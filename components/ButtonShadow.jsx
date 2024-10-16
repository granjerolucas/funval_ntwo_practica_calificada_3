import React from "react";

const ButtonShadow = ({ text = "", rounded = "lg", className = "" }) => {
  return (
    <button
      className={`text-white  text-base font-semibold bg-gradient-to-br from-purple-400 to-blue-500 rounded-${rounded}  px-4 py-[0.4rem]  shadow-[0px_18px_20px_-10px_rgba(37,105,216,0.7)] ${className}`}
    >
      {!text ? <snap>&nbsp;</snap> : <snap>{text}</snap>}
    </button>
  );
};

export default ButtonShadow;
