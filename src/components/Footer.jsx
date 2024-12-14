import React from "react";

const Footer = () => {

  return (
    <div className="w-full  px-2 pt-0 pb-20 sm:py-10  text-center">

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
