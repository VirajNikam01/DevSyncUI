import React, { useState } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { AcceptRequest } from "../api/requests";

const UserList = ({ user, id }) => {
  const [disabled, setDisabled] = useState(false);

  return (
    <Link
      to={`/user/${id}`}
      className="w-full my-1 sm:max-w-screen-md flex flex-wrap gap-y-2 justify-between items-center border px-5 py-2
      border-white/50"
    >
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
        <Button
          id={id}
          disabled={disabled}
          onClick={(e) => {
            e.stopPropagation();
            AcceptRequest(id);
            setDisabled(true);
          }}
          state="intrested"
          className="px-5 duration-500 bg-teal-600/20"
        />
      </div>
    </Link>
  );
};

export default UserList;
