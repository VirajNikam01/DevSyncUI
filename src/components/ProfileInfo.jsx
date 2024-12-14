import React, { useEffect, useState } from "react";

const ProfileInfo = ({ firstName, lastName, designation, about = "" }) => {
  const [showAllAbout, setAllAbout] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-medium text-xl">{firstName + " " + lastName}</h1>
      <h3 className="text-white/70 ">{designation}</h3>
      <div className="description  sm:w-1/2">
        <p
          className={`text-center text-xs px-2 duration-300 ${
            showAllAbout ? "sm:h-32 h-40" : "sm:h-16 h-24"
          } overflow-hidden text-white/80  `}
        >
          {showAllAbout ? about : about.substring(0, 300)}{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => setAllAbout((prev) => !prev)}
          >
            ...show {showAllAbout ? "less" : "more"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProfileInfo;
