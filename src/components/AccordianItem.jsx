import React from "react";

const AccordianItem = ({ title, body, isOpen, setIsOpen }) => {
  return (
    <div className="w-full border-t border-white/60 p-2 my-2">
      <button
        onClick={setIsOpen}
        className="title w-full text-left py-3 flex justify-between items-center"
      >
        <h1 className=" text-lg sm:text-xl">{title}</h1>
        <div className="expInfo flex items-center justify-center gap-3">
          <h1>{isOpen ? "❌" : "📍"}</h1>
        </div>
      </button>
      <div
        className={`transition-all duration-700  overflow-hidden ${
          isOpen ? "max-h-[500px] h-[500px" : "max-h-0 "
        }`}
      >
        <p className="text-white/70 text-xs sm:text-sm sm:py-4 ml-2 sm:mx-8 ">
          {body}
        </p>
      </div>
    </div>
  );
};

export default AccordianItem;
