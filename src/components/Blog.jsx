import React from "react";

const Blog = ({data}) => {
    const {title, profile, name, designation, updatedAt, paraOne, paraTwo, paraThree} = data
  return (
    <div className="mb-16">
      <div className="heading w-full sm:w-11/12">
        <h1 className=" text-xl sm:text-4xl">
          {title}
        </h1>
      </div>

      <div className="profile flex items-center gap-4 sm:gap-5 my-3">
        <div className="intro flex items-center justify-center gap-3 sm:gap-5">
          <div className="dp w-12 h-12 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover object-top"
              src={profile}
              alt=""
            />
          </div>
          <div className=" text-xs sm:text-sm">
            <h1>{name}</h1>
            <p className="text-white/60">{designation}</p>
          </div>
        </div>
        <div className="description border-l pl-2 sm:px-10">
          <p className="text-white/70 text-xs sm:text-base">
            {updatedAt}
          </p>
        </div>
      </div>

      <div className="details flex gap-3 text-xs sm:text-sm flex-col">
        <p>
          {paraOne}
        </p>
        <p>
          {paraTwo}
        </p>
        <p>
          {paraThree}
        </p>
      </div>
    </div>
  );
};

export default Blog;
