import React, { useEffect, useState } from "react";
import Clock from "./Clock";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfilePhoto from "./ProfilePhoto";
import ProfileNavigationPopUp from "./ProfileNavigationPopUp";

const Header = () => {
  const [isUserPopUpVisible, setIsUserPopUpVisible] = useState(false);
  const user = useSelector((store) => store.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      setIsUserPopUpVisible(false);
    }
  }, [user]);

  return (
    <div className="px-2 border-b w-full ">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div
          onClick={() => navigate("/")}
          className="logo w-20 h-16 overflow-hidden"
        >
          <img
            src="https://devsync.in/wp-content/uploads/2024/05/Black-And-Beige-Minimalist-Aesthetic-Modern-Simple-Typography-Salt-Logo-1.png"
            alt=""
            className="w-full h-full object-center scale-[210%]"
          />
        </div>

        {/* clock */}
        <div className="clock relative">
          {user ? (
            <div
              onClick={() => setIsUserPopUpVisible((prev) => !prev)}
              className="cursor-pointer"
            >
              <ProfilePhoto
                url={user.photoUrl}
                className="w-12 h-12 border-2"
              />
            </div>
          ) : (
            <Clock />
          )}

          <div
            className={`absolute my-2 top-10 right-0 z-10 transition-all duration-300 ${
              isUserPopUpVisible ? "max-h-96 h-96" : "max-h-0 h-0"
            } overflow-hidden`}
          >
            <ProfileNavigationPopUp setIsUserPopUpVisible={setIsUserPopUpVisible} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
