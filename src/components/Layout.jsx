import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="w-full ">
      <Header />
      <div className="pt-2">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
