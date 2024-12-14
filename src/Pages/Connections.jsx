import React from "react";
import { useSelector } from "react-redux";
import useUserConnections from "../hooks/useUserConnections";
import { Link, useNavigate } from "react-router-dom";

const Connections = () => {
  const connections = useSelector((store) => store.user.connections);
  useUserConnections();

  const navigate = useNavigate();

  const handelUserClick = (id, elem, isConection = false) => {
    navigate(`/connection/${id}`, { state: { ...elem, isConection: true } });
  };

  return (
    <div className="max-w-screen-xl mx-auto my-5 flex flex-col items-center justify-center ">
      {connections.map((elem) => {
        return (
          <div
            onClick={() => handelUserClick(elem._id, elem)}
            key={elem._id}
            className="w-full my-1 sm:w-4/6 cursor-pointer hover:bg-white/10 rounded-md duration-200"
          >
            <div className="list border rounded-lg border-white/50 flex items-center justify-start  gap-3 p-3">
              <div className="profile w-16 h-16 rounded-full overflow-hidden">
                <img className="object-cover" src={elem.photoUrl} alt="" />
              </div>
              <div className="info">
                <h1>{elem.firstName + " " + elem.lastName} </h1>
                <h1 className="text-white/80">{elem.designation}</h1>
                <div className="info flex gap-4 text-white/50">
                  <p className="text-sm">{elem.gender.toUpperCase()}</p>
                  <span>|</span>
                  <p>{elem.age}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
