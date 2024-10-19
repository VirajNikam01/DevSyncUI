import React from "react";

const Intro = () => {
  return (
    <div className="h-fit flex flex-col justify-center items-center text-center gap-2 sm:gap-5 ">
      <h1 className="text-4xl sm:text-7xl">
        Hello <span className="bg-teal-700 px-1 sm:px-2"> Developer</span>,
      </h1>
      <h1 className="text-2xl sm:text-4xl">Build Your Dev Team</h1>

      <div className="buttons my-1 sm:my-5 text-center">
        <p className="mb-2 sm:mb-4 text-sky-500 text-xs sm:text-base px-4 sm:px-0">
          Dear user, we have filled dummy user to give you experience our
          features so click on login.
        </p>
        <button className="px-6 sm:px-9 rounded-sm py-2 border font-medium text-xl hover:bg-cyan-700 duration-200">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Intro;
