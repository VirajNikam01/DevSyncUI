import React, { useEffect, useRef } from "react";
import Card from "./Card";
import { Card_Data } from "../utils/static";

const Scroller = () => {
  return (
    <div className="scrollerWrapper flex items-center sm:gap-4 justify-center ">
      <button className=" p-2 sm:p-4 border">{"<"}</button>
      <div className="scroller w-full  flex gap-2 p-2 overflow-x-scroll">
        <div className="flex gap-3">
          {Card_Data.map((data, index) => (
            <div key={index}>
              <Card key={data.id} data={data} />
            </div>
          ))}
        </div>
      </div>
      <button className="p-2 sm:p-4 border">{">"}</button>
    </div>
  );
};

export default Scroller;
