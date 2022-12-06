import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-secondary py-1.5 px-2 font-mono font-bold uppercase tracking-widest text-light">
        {children}
    </button>
  );
};

export default Button;
