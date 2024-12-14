import React, { useState } from "react";
import AcceptButton from "./AcceptButton";
import RejectButton from "./RejectButton";

const UserList = ({ user, id }) => {
  const [RequestAccepted, setRequestAccepted] = useState(null);

  return (
    <div className="w-full my-1 sm:w-10/12 flex flex-wrap gap-y-2 justify-between items-center border-t border-white/50">
      <div className="list  flex items-center justify-start  gap-3 p-1">
        <div className="profile w-16 h-16 rounded-full overflow-hidden">
          <img className="object-cover" src={user.photoUrl} alt="" />
        </div>
        <div className="info">
          <h1>{user.firstName + " " + user.lastName} </h1>
          <h1 className="text-white/80">{user.designation}</h1>
          <div className="info flex gap-4 text-white/50">
            <p className="text-sm">{user.gender.toUpperCase()}</p>
            <span>|</span>
            <p>{user.age}</p>
          </div>
        </div>
      </div>

      <div className="buttons ">
        {RequestAccepted === "accepted" ? (
          <AcceptButton id={id} RequestAccepted={RequestAccepted} />
        ) : RequestAccepted === "rejected" ? (
          <RejectButton />
        ) : (
          <div className="flex gap-5">
            {" "}
            <AcceptButton
              id={id}
              setRequestAccepted={setRequestAccepted}
              RequestAccepted={RequestAccepted}
            />
            <RejectButton setRequestAccepted={setRequestAccepted} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;
