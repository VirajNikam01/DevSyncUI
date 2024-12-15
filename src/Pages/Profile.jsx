import React, { useEffect, useState } from "react";
import ProfilePhoto from "../components/ProfilePhoto";
import { useSelector } from "react-redux";
import ProfileInfo from "../components/ProfileInfo";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineProfile } from "react-icons/ai";
import "../App.css";

const Profile = () => {
  const { user } = useSelector((store) => store.user);
  const date = new Date(user?.createdAt);

  const navigate = useNavigate();
  const goToEditPage = () => {
    navigate("/profile-edit");
  };

  return (
    <div className="flex relative flex-col items-center justify-center sm:my-5 max-w-screen-xl mx-auto mb-32">
      <div className="identity p-5  flex items-center text-base sm:text-xl gap-1 sm:gap-3 w-full cursor-default">
        <AiOutlineProfile />
        <p>Profile</p>
      </div>
      <div className="relative">
        <div
          onClick={goToEditPage}
          className="edit text-[10px] absolute top-2 right-0 w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center cursor-pointer shadow-xl shadow-sky-400"
        >
          ✏️
        </div>
        <ProfilePhoto url={user?.photoUrl} />
      </div>
      <div className="my-5">
        <ProfileInfo
          firstName={user?.firstName}
          lastName={user?.lastName}
          designation={user.designation}
          about={user?.about}
        />
      </div>

      <div className="info mb-3">
        <p className="createdAt text-xs cursor-default text-white/50">
          Member since {date.toDateString()}
        </p>
      </div>

      {/* Connections */}
      <div className="req flex justify-between items-center w-full sm:w-1/2 px-2 sm:px-0">
        <Link
          to={"/connections"}
          className="text-sm text-blue-800 hover:text-blue-800/50 cursor-pointer select-none duration-300"
        >
          connections
        </Link>
        <div className="gender text-sm text-white/60">
          {user.gender.toUpperCase()}
        </div>
      </div>

      {/* Skills */}
      <div className="skills w-full text-start px-2 sm:px-0 sm:w-1/2 my-3">
        <h1 className="mb-2 text-xl text-white/60 font-medium tracking-wide ">
          Skills
        </h1>
        <div className="scroller p-1 flex justify-start items-center gap-3 w-full overflow-x-scroll">
          {user.skills.map((elem) => {
            return (
              <div
                key={elem}
                className="p-4 py-1 text-sm rounded-md cursor-default shadow-sm shadow-teal-700/50"
              >
                {elem}
              </div>
            );
          })}
        </div>
      </div>

      {/* Posts */}
      <div className="posts w-full sm:w-1/2 px-2 sm:px-0">
        <h1 className="mb-2 text-xl text-white/60 font-medium tracking-wide ">
          Posts
        </h1>
        <div className="grid grid-cols-3 gap-[10px]">
          {Array.from({ length: 9 }).map((elem, index) => {
            return (
              <div
                key={index}
                className="w-full h-[100px] bg-white/5 rounded-md flex items-center justify-center"
              >
                <h1 className="text-xl text-white/15"> {index+1}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
