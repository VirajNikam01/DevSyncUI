import React from "react";
import "../App.css";
import Intro from "../components/Intro";
import Scroller from "../components/Scroller";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto pb-10 ">
      <div className="mt-14 sm:mt-28">
      <Intro />
      </div>

      <div className="my-5 px-2">
        <h1 className="text-lg sm:text-xl pt-5 sm:py-4 px-5 sm:px-0">Dev's Using the Platform.</h1>
        <Scroller />
      </div>
    </div>
  );
};

export default Home;
