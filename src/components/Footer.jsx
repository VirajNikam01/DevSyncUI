import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const goToSigninPage = () => {
    navigate("/signin");
  };
  return (
    <div className="w-full  px-2 pt-0 pb-20 sm:py-10  text-center">
      <div className="text-center border max-w-screen-xl mx-auto py-10">
        <h1 className="text-2xl sm:text-5xl sm:font-medium sm:my-2">
          You’ve made it this far.
        </h1>
        <h1 className="text-2xl sm:text-5xl sm:font-medium sm:my-2">
          {" "}
          Let’s build your first Team
        </h1>
        <p className=" my-2 text-sm font-extralight sm:font-normal">
          DevSync is free to get started with.
        </p>
        <button
          onClick={goToSigninPage}
          className="bg-teal-600 px-6 py-2 rounded-sm"
        >
          Sign up for free
        </button>
      </div>
      <div className="flex justify-evenly flex-col sm:flex-row gap-2 sm:gap-0 mt-10 sm:mt-16">
        <div>
          <h1 className="text-2xl">
            DevSync<span className="text-red-600 font-bold">.</span>
          </h1>
        </div>
        <div className="text-sm">
          <p>No © copyright issues.</p>
        </div>
        <div className="text-sm">
          <p>Feel free to copy. If you need any help ping us !</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
