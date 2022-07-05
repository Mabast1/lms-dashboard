import React from "react";

import { useStateContext } from "../context/ContextProvider";

const Button = ({ bgColor, color, size, text, borderRadius, icon, width }) => {
  const { setIsClicked } = useStateContext();

  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl w-${width} rounded-${borderRadius}`}
      onClick={() => setIsClicked(false)}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
