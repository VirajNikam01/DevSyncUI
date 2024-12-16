import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useUserData } from "../hooks/useUserData";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import { LIVE_URL } from "../utils/helper";

const MESSAGES = [
  "Server is waking up, please wait a moment!",
  undefined,
  "The server is still having its chai, wait a minute!",
  undefined,
  "The server is still finding its jhola, one moment!",
  undefined,
  "The server is fixing its kurta, almost ready!",
  undefined,
  "The server is looking for its chappals, just a moment!",
  undefined,
  "The server is waiting for its auto, please wait!",
  undefined,
  "The server is stuck in traffic near Lajpat Nagar, hold on!",
  undefined,
  "The server is stuck in a traffic jam on the way to the office!",
  undefined,
];
let INDEX = 1;

const Layout = () => {
  const [isBanner, setIsBanner] = useState(true);
  const [serverMessage, setServerMessage] = useState(undefined);
  const navigate = useNavigate();
  const { isUserLoading, user } = useSelector((store) => store.user);

  useUserData(`${LIVE_URL}profile/view`);

  useEffect(() => {
    let timer = setTimeout(() => {
      setServerMessage(MESSAGES[0]);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let timer;

    if (!isUserLoading) {
      clearTimeout(timer);
      return;
    }
    const TIME = INDEX % 2 === 0 ? 300 : 6000;
    timer = setTimeout(() => {
      setServerMessage(MESSAGES[INDEX]);
      INDEX >= MESSAGES.length - 1 ? (INDEX = 0) : INDEX++;
    }, TIME);

    return () => clearTimeout(timer);
  }, [serverMessage]);

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
          <div className="min-h-[60vh] sm:min-h-[90vh] w-full flex items-center flex-col justify-center">
            <h1
              className={`text-xs sm:text-base text-white animate-pulse transition-all duration-700 ${
                serverMessage ? "h-5" : "h-0 overflow-y-hidden"
              }`}
            >
              {serverMessage}
            </h1>
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
