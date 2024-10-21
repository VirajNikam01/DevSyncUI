import React from "react";
import { useNavigate } from "react-router-dom";

const Intro = ({ goToLoginPage }) => {
  const navigate = useNavigate();
  return (
    <div className="h-fit flex flex-col justify-center items-center text-center gap-2 sm:gap-5 select-none">
      <h1 className="text-4xl sm:text-7xl">
        Hello{" "}
        <span className="bg-teal-700 px-1 sm:px-2 font-medium"> Developer</span>
        ,
      </h1>
      <h1 className="text-2xl sm:text-4xl">Build Your Dev Team</h1>

      <div className="buttons my-1 sm:my-5 text-center flex gap-3">
        {/* <p className="mb-2 sm:mb-4 text-sky-500 text-xs sm:text-base px-4 sm:px-0">
          "Dear user, we have pre-filled sample data to help you explore our
          features. Please click on 'Login' to proceed."
        </p> */}
        <button
          onClick={goToLoginPage}
          className="px-6 sm:px-9 rounded-sm py-2 border font-medium text-xl hover:bg-cyan-700 duration-200"
        >
          Log In
        </button>

        <button
          onClick={() => navigate("/quiz")}
          className="px-6 sm:px-9 rounded-md py-2 bg-white/10  text-xl  "
        >
          Take Quiz
        </button>
      </div>
    </div>
  );
};

export default Intro;
