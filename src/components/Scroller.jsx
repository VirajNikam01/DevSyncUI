import React, { useEffect, useRef } from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const Scroller = ({ scrollerData = [], isUserLoggedIn = false }) => {
  // console.log(isUserLoggedIn);
  const scrollerRef = useRef();
  const navigate = useNavigate();

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

  const handelUserClick = (id, elem, isUser) => {
    // console.log("CLICKED", isUser);
    if (!isUser) return;
    navigate(`/user/${id}`);
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
        {scrollerData.map((data, index) => (
          <div key={index} className="w-fit">
            <Card
              key={data.id}
              data={data}
              isUserLoggedIn={isUserLoggedIn}
              handelUserClick={() =>
                handelUserClick(data._id, data, isUserLoggedIn)
              }
            />
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
