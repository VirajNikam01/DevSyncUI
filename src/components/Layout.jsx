import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useUserData } from "../hooks/useUserData";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import useUserConnections from "../hooks/useUserConnections";
import { LIVE_URL } from "../utils/helper";

const Layout = () => {
  const [isBanner, setIsBanner] = useState(true);
  const navigate = useNavigate();
  const { isUserLoading, user } = useSelector((store) => store.user);

  useUserData(`${LIVE_URL}profile/view`);

  useUserConnections();

  return (
    <div className="w-full ">
      {isBanner && (
        <div className="w-full bg-sky-600 py-2 px-3 text-xs sm:text-sm sm:text-center relative">
          <h1 className="bg-transparent w-2/3 sm:w-full">
            If you come across any feature suggestions, feel free to share them.
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
        {isUserLoading ? (
          <div className="h-screen w-full flex items-center justify-center">
            <Loader />
          </div>
        ) : (
          <Outlet />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
