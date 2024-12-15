import React, { useState } from "react";


const State = {
  intrested: "Accept",
  accepted: "Friends",
  none: "Show Intrest",
  pending: "Pending",
};
const StateDesign = {
  intrested: "bg-teal-600 border-teal-600",
  accepted: "bg-green-600 border-green-600",
  none: "bg-sky-700 border-sky-700",
  pending: "cursor-not-allowed text-black hover:bg-white/50 bg-white/50",
};

const Button = ({
  id,
  className = "",
  onClick,
  state = "none",
  disabled = false,
}) => {
  return (
    <button
      disabled={State[state] === "pending" || disabled}
      onClick={onClick}
      className={`text-sm w-full rounded-xl py-1 border hover:bg-transparent bg-sky-900 duration-100 disabled:cursor-not-allowed disabled:text-black disabled:hover:bg-white/50 disabled:!bg-white/50 ${StateDesign[state]} ${className}`}
    >
      {disabled ? "Pending" : State[state]}
    </button>
  );
};

export default Button;
