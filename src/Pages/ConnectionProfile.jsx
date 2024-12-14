import React, { useEffect, useState } from "react";
import { AiOutlineProfile } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import ProfilePhoto from "../components/ProfilePhoto";
import ProfileInfo from "../components/ProfileInfo";
import { useSelector } from "react-redux";
import { LIVE_URL } from "../utils/helper";
import Button from "../components/Button";
import { SendIntrestedRequest } from "../api/requests";

const ConnectionProfile = () => {
  const [user, setUser] = useState(undefined);
  const [disabled, setDisabled] = useState(false);
  const { id } = useParams();

  console.log(id, "USERID");

  useEffect(() => {
    const getUserData = async () => {
      const response = await fetch(`${LIVE_URL}user/${id}`, {
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      console.log(data, "DATA");
      setUser(data?.data);
    };

    getUserData();
  }, [id]);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  if (user === undefined) return;

  return (
    <div className="flex relative flex-col items-center justify-center sm:my-5 max-w-screen-xl mx-auto mb-32">
      <div className="identity p-5  flex items-center text-base sm:text-xl gap-1 sm:gap-3 w-full cursor-default">
        <AiOutlineProfile />
        <span onClick={goBack} className="cursor-pointer">
          ❎
        </span>
      </div>
      <div className="relative">
        <ProfilePhoto url={user?.photoUrl} />
      </div>
      <div className="my-5">
        <ProfileInfo
          firstName={user?.firstName}
          lastName={user?.lastName}
          designation={user?.designation}
          about={user?.about}
        />
      </div>

      {/* Connections */}
      <div className="req flex justify-between items-center w-full sm:w-1/2 px-2 sm:px-0">
        <div className="w-1/2">
          <Button
            id={user._id}
            state={user.relationship}
            disabled={disabled}
            onClick={() => {
              SendIntrestedRequest(id);
              setDisabled(true);
            }}
          />
        </div>

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
          {Array.from({ length: 20 }).map((elem, index) => {
            return (
              <div key={index} className="w-full h-[100px] bg-slate-600">
                {index}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ConnectionProfile;
