import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const Scroller = ({ scrollerData = [], isUserLoggedIn = false }) => {
  const scrollerRef = useRef();
  const navigate = useNavigate();

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const updateScrollButtons = () => {
    if (!scrollerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollerRef.current;

    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    updateScrollButtons();

    const handleResize = () => {
      updateScrollButtons();
    };

    // Update on resize
    window.addEventListener("resize", handleResize);

    // Optional: update when user scrolls manually
    const currentRef = scrollerRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", updateScrollButtons);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (currentRef) {
        currentRef.removeEventListener("scroll", updateScrollButtons);
      }
    };
  }, []);

  const scrollByCards = (direction = "right") => {
    const card = scrollerRef.current?.children[0];
    const cardWidth = card ? card.getBoundingClientRect().width : 0;
    const scrollAmount = cardWidth * 2;

    scrollerRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const handleUserClick = (id, elem, isUser) => {
    if (!isUser) return;
    navigate(`/user/${id}`);
  };

  return (
    <div className="scrollerWrapper flex items-center sm:gap-4 justify-center">
      {showLeftArrow && (
        <button
          onClick={() => scrollByCards("left")}
          className="p-2 sm:p-4 border"
        >
          {"<"}
        </button>
      )}
      <div
        ref={scrollerRef}
        className="scroller w-full flex gap-2 p-2 overflow-x-scroll scroll-smooth"
      >
        {scrollerData.map((data, index) => (
          <div key={index} className="w-fit">
            <Card
              key={data.id}
              data={data}
              isUserLoggedIn={isUserLoggedIn}
              handelUserClick={() =>
                handleUserClick(data._id, data, isUserLoggedIn)
              }
            />
          </div>
        ))}
      </div>
      {showRightArrow && (
        <button
          onClick={() => scrollByCards("right")}
          className="p-2 sm:p-4 border"
        >
          {">"}
        </button>
      )}
    </div>
  );
};

export default Scroller;
