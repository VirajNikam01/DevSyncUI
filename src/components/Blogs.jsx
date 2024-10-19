import React from "react";
import Blog from "./Blog";
import { Blog_Data } from "../utils/static";

const Blogs = () => {

  return (
    <div>
      <p className="text-sky-700 font-bold text-lg">Education</p>
      {Blog_Data.map((data) => {
        return <Blog key={data.id} data={data} />;
      })}
    </div>
  );
};

export default Blogs;
