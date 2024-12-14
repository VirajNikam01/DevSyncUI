import React, { useEffect, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import AcceptButton from "../components/AcceptButton";
import RejectButton from "../components/RejectButton";
import UserList from "../components/UserList";
import useUserConnections from "../hooks/useUserConnections";

const Requests = () => {
  const [requests, setRequests] = useState([]);


  const getAllRequests = async () => {
    try {
      const response = await fetch(
        "http://localhost:7777/user/requests/received",
        {
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();

      setRequests(data?.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllRequests();
  }, [requests]);

  return (
    <div className="w-full min-h-screen h-full p-1 sm:px-0 sm:my-2 max-w-screen-xl mx-auto">
      <div className="Identity  flex items-center px-5 sm:px-0 gap-1 sm:gap-3 text-base sm:text-xl">
        <FaUserFriends />
        <h1>Requests</h1>
      </div>
      <div className="max-w-screen-xl mx-auto my-5 flex flex-col items-center justify-center ">
        {requests.length>0 ?requests.map(({ fromUserId, createdAt, status, _id }) => {
          return <UserList user={fromUserId} id={_id} key={_id} />;
        }): <div className="cursor-default w-full my-10 flex items-center justify-center"><h1>No requests.</h1></div>
      
      }
      </div>
    </div>
  );
};

export default Requests;
