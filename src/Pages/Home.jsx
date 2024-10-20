import React from "react";
import "../App.css";
import Intro from "../components/Intro";
import Scroller from "../components/Scroller";
import Blogs from "../components/Blogs";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate("/login");
  };


  return (
    <div className="max-w-screen-xl mx-auto pb-10 ">
      {/* Intro */}
      <div className="mt-14 sm:mt-28">
        <Intro goToLoginPage={goToLoginPage} />
      </div>

      {/* Scroller */}
      <div className="my-5 px-2">
        <h1 className="text-lg sm:text-xl pt-5 sm:py-4 px-5 sm:px-0">
          Dev's Using the Platform.
        </h1>
        <Scroller />
      </div>

      {/* Education Blog */}
      <div className=" my-16 sm:my-20 px-2">
        <Blogs />
      </div>
    </div>
  );
};

export default Home;
