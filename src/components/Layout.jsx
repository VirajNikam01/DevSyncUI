import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  const [isBanner, setIsBanner] = useState(true);

  return (
    <div className="w-full ">
      {isBanner && (
        <div className="w-full bg-sky-600 py-2 px-3 text-xs sm:text-sm sm:text-center relative">
          <h1 className="bg-transparent w-2/3 sm:w-full">
            We are not a private limited company. So feel free to give
            suggestions.
          </h1>
          <div
            onClick={() => setIsBanner(false)}
            className="cross bg-transparent absolute right-5 top-[50%] -translate-y-[50%] cursor-pointer font-bold text-xl"
          >
            X
          </div>
        </div>
      )}
      <Header />
      <div className="pt-2">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
