import React, { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  const [isBanner, setIsBanner] = useState(true);
  return (
    <div className="w-full ">
      {isBanner && (
        <div className="w-full bg-sky-600 py-2 px-3 sm:text-center relative">
          <h1 className="bg-transparent">Under Development.</h1>
          <div
            onClick={() => setIsBanner(false)}
            className="cross bg-transparent absolute right-5 top-[50%] -translate-y-[50%] cursor-pointer font-bold text-xl"
          >
            X <span className="text-base bg-transparent">[close]</span>
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
