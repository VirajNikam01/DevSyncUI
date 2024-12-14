import React, { useEffect, useState } from "react";
import { MdOutlineRssFeed } from "react-icons/md";
import { useSelector } from "react-redux";
import Scroller from "../components/Scroller";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import { DEV_URL } from "../utils/helper";

const Feed = () => {
  const [users, setUsers] = useState([]);
  const user = useSelector((store) => store.user.user);
  const navigate = useNavigate();

  const getFeedPeople = async () => {
    try {
      const data = await fetch(`${DEV_URL}feed?page=1&limit=100`, {
        credentials: "include",
      });
      const response = await data.json();
      if (response?.data) setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeedPeople();
  }, []);

  return (
    <div className=" w-full min-h-screen h-full p-1 sm:px-0 sm:my-2 max-w-screen-xl mx-auto">
      <div
        className={`Identity  flex items-center px-5 sm:px-0 gap-1 sm:gap-3 text-base sm:text-xl`}
      >
        <MdOutlineRssFeed />
        <p>Feed</p>
      </div>
      <div className="scroller sm:my-8 min-h-52 h-full ">
        <h1 className="sm:text-2xl text-xl font-medium text-white/80 mt-2 sm:mt-0 sm:mx-0 mx-5">
          People you may Know?
        </h1>
        {users.length > 0 ? (
          <Scroller isUserLoggedIn={true} scrollerData={users} />
        ) : (
          <div className="h-full min-h-52 w-full flex items-center justify-center ">
            <Loader className="w-5 h-5" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
