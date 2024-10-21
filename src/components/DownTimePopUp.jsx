import React from "react";
import { useNavigate } from "react-router-dom";

const DownTimePopUp = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className="w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 shadow-xl rounded-xl aspect-video flex items-center justify-center">
      <div
        onClick={goToHome}
        className="close absolute top-10 right-10 text-2xl cursor-pointer"
      >
        ❌
      </div>

      <div className=" text-center">
        <h1>Backend Under Maintainance,</h1>
        <h1>We will be soon back, till than practice the questions.</h1>
      </div>
    </div>
  );
};

export default DownTimePopUp;
