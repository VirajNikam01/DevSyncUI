import React, { useEffect, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import RejectButton from "../components/RejectButton";
import UserList from "../components/UserList";
import { LIVE_URL } from "../utils/helper";
import { ShowAllRequests } from "../api/requests";
import Loader from "../components/Loader";

const Requests = () => {
  const [requests, setRequests] = useState(undefined);

  const getRequests = async () => {
    try {
      const { data } = await ShowAllRequests();
      console.log(data, "REQUESTS");
      setRequests(data);
    } catch (error) {
      console.log(error);
      setRequests([]);
    }
  };

  useEffect(() => {
    getRequests();
  }, []);

  if (requests === undefined)
    return (
      <div className="w-full min-h-[70vh] flex items-center justify-center">
        <Loader className="w-16 h-16" />
      </div>
    );

  return (
    <div className="w-full min-h-screen h-full p-1 sm:px-0 sm:my-2 max-w-screen-xl mx-auto">
      <div className="Identity  flex items-center px-5 sm:px-0 gap-1 sm:gap-3 text-base sm:text-xl">
        <FaUserFriends />
        <h1>Requests</h1>
      </div>
      <div className="max-w-screen-xl mx-auto my-5 flex flex-col items-center justify-center ">
        {requests.length ? (
          requests.map(({ fromUserId, createdAt, status, _id }) => {
            return <UserList user={fromUserId} id={fromUserId._id} key={_id} />;
          })
        ) : (
          <div className="cursor-default w-full my-10 flex items-center justify-center">
            <h1>No requests.</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Requests;
