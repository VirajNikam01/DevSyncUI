import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { AiOutlineProfile } from "react-icons/ai";
import { MdOutlineRssFeed } from "react-icons/md";
import { TbCirclesRelation } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { removeUser } from "../store/slices/userSlice";
import { LIVE_URL } from "../utils/helper";

const options = [
  {
    text: "Profile",
    path: "/profile",
    icon: <AiOutlineProfile />,
  },
  {
    text: "Feed",
    path: "/feed",
    icon: <MdOutlineRssFeed />,
  },
  {
    text: "Connections",
    path: "/connections",
    icon: <TbCirclesRelation />,
  },
  {
    text: "Requests",
    path: "/requests",
    icon: <FaUserFriends />,
  },
];

const ProfileNavigationPopUp = ({ setIsUserPopUpVisible }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutUser = async () => {
    try {
      const data = await fetch(`${LIVE_URL}logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const response = await data.json();
      navigate("/");
      dispatch(removeUser());
    } catch (error) {
      console.log(error.message, "ERROR MESSAGE");
    }
  };
  return (
    <div className="bg-gray-700 border w-40 sm:w-52 rounded-lg p-1">
      {options.map((elem) => {
        return (
          <div
            onClick={() => setIsUserPopUpVisible(false)}
            key={elem.text}
            className="hover:bg-gray-600 my-1  duration-200 rounded-lg cursor-pointer"
          >
            <NavLink
              to={elem.path}
              style={({ isActive }) => (isActive ? { opacity: 0.5 } : {})}
              className={` w-full flex items-center p-2 gap-3`}
            >
              {elem.icon}
              <p>{elem.text}</p>
            </NavLink>
          </div>
        );
      })}
      <div
        onClick={logoutUser}
        className="hover:bg-gray-600 my-1 p-2 duration-200 rounded-lg cursor-pointer w-full flex items-center gap-3"
      >
        <LuLogOut /> <p>Log Out</p>
      </div>
    </div>
  );
};

export default ProfileNavigationPopUp;
