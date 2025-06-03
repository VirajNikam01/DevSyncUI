import React, { useEffect, useState } from "react";
import { MdOutlineRssFeed } from "react-icons/md";
import { useSelector } from "react-redux";
import Scroller from "../components/Scroller";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import { LIVE_URL } from "../utils/helper";
import { useQuery } from "@tanstack/react-query";

const Feed = () => {
  // const [users, setUsers] = useState([]);
  const user = useSelector((store) => store.user.user);
  const navigate = useNavigate();

  const getFeedPeople = async () => {
    try {
      const data = await fetch(`${LIVE_URL}feed?page=1&limit=100`, {
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
      const response = await data.json();
      return response.data;
      // if (response?.data) setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const { data: users = [] } = useQuery({
    queryKey: ["user-suggestions"],
    queryFn: async () => {
      return await getFeedPeople();
    },
  });

  // useEffect(() => {
  //   getFeedPeople();
  // }, []);

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
            <Loader className="w-16 h-16" />
          </div>
        )}
      </div>
      {/* Posts */}
      <div className="posts w-full my-5  px-2 sm:px-0">
        <h1 className="mb-2 text-xl text-white/60 font-medium tracking-wide ">
          #Trending
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-[10px]">
          {Array.from({ length: 12 }).map((elem, index) => {
            return (
              <div
                key={index}
                className="w-full h-[100px] bg-white/5 rounded-md flex items-center justify-center"
              >
                <h1 className="text-xs text-white/15"> {"coming soon"}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
