import React from "react";
import { useNavigate } from "react-router-dom";

const DownTimePopUp = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className="w-full px-1 pt-10 sm:pt-0  md:w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 shadow-xl rounded-xl aspect-video flex items-center justify-center flex-col gap-2 sm:gap-5">
      <div
        onClick={goToHome}
        className="close absolute top-5 right-5 sm:top-10 sm:right-10 text-2xl cursor-pointer"
      >
        ❌
      </div>

      <div className=" text-center text-sm sm:text-base">
        <h1>Backend Under Maintainance,</h1>
        <h1>We will be soon back, till than practice the questions.</h1>
      </div>
      <button
        onClick={() => navigate("/quiz")}
        className=" px-4 sm:px-6 py-1 bg-sky-600 font-medium rounded-md sm:;text-lg"
      >
        Play Quiz
      </button>
    </div>
  );
};

export default DownTimePopUp;
