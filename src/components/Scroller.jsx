import React from "react";
import Card from "./Card";

const Scroller = () => {
  return (
    <div className="scrollerWrapper flex items-center sm:gap-4 justify-center ">
      <button className=" p-2 sm:p-4 border">{"<"}</button>
      <div className="scroller w-full  flex gap-2 p-2 overflow-x-scroll">
        {Array(20)
          .fill()
          .map((_, index) => (
            <div key={index}>
              <Card />
            </div>
          ))}
      </div>
      <button className="p-2 sm:p-4 border">{">"}</button>
    </div>
  );
};

export default Scroller;
