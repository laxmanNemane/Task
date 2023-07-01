import React from "react";

const Button = ({
  text,
  buttonStyle,
  buttonType,

  onClick,
  props,
}) => {
  return (
    <button
      className={`${buttonStyle}`}
      type={`${buttonType}`}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
