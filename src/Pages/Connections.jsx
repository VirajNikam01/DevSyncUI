import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { LIVE_URL } from "../utils/helper";
import { GetAllConnections } from "../api/profile";

const Connections = () => {
  const [Connections, setConnections] = useState(undefined);
  const navigate = useNavigate();

  const getConnection = async () => {
    try {
      const data = await GetAllConnections();
      setConnections(data);
    } catch (error) {
      console.log(error, "ERROR");
      setConnections([]);
    }
  };

  useEffect(() => {
    getConnection();
  }, []);

  const handelUserClick = (id) => {
    navigate(`/user/${id}`);
  };

  if (Connections === undefined)
    return (
      <div className="w-full min-h-[70vh] flex items-center justify-center">
        <Loader className="w-16 h-16" />
      </div>
    );

  return (
    <div className="max-w-screen-xl min-h-[70vh] mx-auto my-5 flex flex-col items-center justify-center ">
      {Connections.length > 0 ? (
        Connections.map((elem) => {
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
        })
      ) : (
        <div className="cursor-default w-full my-10 flex items-center justify-center">
          <h1>No Connections.</h1>
        </div>
      )}
    </div>
  );
};

export default Connections;
