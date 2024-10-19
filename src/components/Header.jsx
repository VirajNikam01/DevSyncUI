import React from "react";

const Header = () => {
  return (
    <div className="px-2 border-b w-full ">
      <nav className="max-w-screen-xl mx-auto">
        <div className="logo w-20 h-16 overflow-hidden">
          <img
            src="https://devsync.in/wp-content/uploads/2024/05/Black-And-Beige-Minimalist-Aesthetic-Modern-Simple-Typography-Salt-Logo-1.png"
            alt=""
            className="w-full h-full object-center scale-[210%]"
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
