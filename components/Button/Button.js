import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-secondary py-1.5 px-2">
      <p className="font-mono font-bold uppercase tracking-widest text-light">
        {children}
      </p>
    </button>
  );
};

export default Button;
