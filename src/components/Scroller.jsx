import React, { useEffect, useRef } from "react";
import Card from "./Card";
import { Card_Data } from "../utils/static";

const Scroller = () => {
  const scrollerRef = useRef();

  const shownNextCards = () => {
    const cardWidth = parseInt(
      getComputedStyle(scrollerRef.current.children[0]).width
    );
    scrollerRef.current.scrollLeft += cardWidth * 2;
  };

  const showPrevCards = () => {
    const cardWidth = parseInt(
      getComputedStyle(scrollerRef.current.children[0]).width
    );
    scrollerRef.current.scrollLeft -= cardWidth * 2;
  };

  return (
    <div className="scrollerWrapper flex items-center sm:gap-4 justify-center ">
      <button onClick={showPrevCards} className=" p-2 sm:p-4 border">
        {"<"}
      </button>
      <div
        ref={scrollerRef}
        className="scroller w-full  flex gap-2 p-2 overflow-x-scroll scroll-smooth"
      >
        {Card_Data.map((data, index) => (
          <div key={index} className="w-fit">
            <Card key={data.id} data={data} />
          </div>
        ))}
      </div>
      <button onClick={shownNextCards} className="p-2 sm:p-4 border">
        {">"}
      </button>
    </div>
  );
};

export default Scroller;
