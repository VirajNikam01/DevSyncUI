import React, { useState } from "react";
import Button from "./Button";
import { SendIntrestedRequest } from "../api/requests";

const Card = ({ data, handelUserClick, isUserLoggedIn = false }) => {
  const [disabled, setDisabled] = useState(false);
  const { _id, photoUrl, firstName, lastName = "", designation } = data;

  return (
    <div
      onClick={() => handelUserClick(_id, data)}
      className="card py-2 cursor-pointer min-h-40 min-w-28 border text-center flex flex-col justify-center items-center gap-3 duration-200 rounded-lg hover:rounded-none"
    >
      <div className="profile w-20 h-20 rounded-full overflow-hidden bg-gray-100">
        <img
          className="w-full h-full object-cover object-center"
          src={photoUrl}
          alt=""
        />
      </div>
      <div className="desc text-xs">
        <div className="name font-medium">{firstName + " " + lastName}</div>
        <div className="designation text-xs text-white/70">{designation}</div>
      </div>
      {isUserLoggedIn && (
        <div className="connect w-11/12 ">
          <Button
            disabled={disabled}
            id={_id}
            className={`text-xs !bg-transparent hover:!bg-sky-700/30 `}
            onClick={(event) => {
              event.stopPropagation();
              SendIntrestedRequest(_id);
              setDisabled(true);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Card;
