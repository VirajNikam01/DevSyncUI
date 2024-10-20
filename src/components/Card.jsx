import React from "react";

const Card = ({data}) => {
  const {id, profile, name, designation} = data
  return (
    <div className="card h-40 min-w-28 border text-center flex flex-col justify-center items-center gap-3">
      <div className="profile w-20 h-20 rounded-full overflow-hidden bg-gray-100">
        <img
          className="w-full h-full object-cover object-center"
          src={profile}
          alt=""
        />
      </div>
      <div className="desc text-xs">
        <div className="name font-medium">{name}</div>
        <div className="designation text-xs text-white/70">{designation}</div>
      </div>
    </div>
  );
};

export default Card;
