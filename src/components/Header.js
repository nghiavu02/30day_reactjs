import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const handleFixedHeader = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > header.offsetHeight) {
        header.classList.add("fixed");
      } else header.classList.remove("fixed");
    };
    window.addEventListener("scroll", handleFixedHeader);
    return () => {
      //   window.removeEventListener("scroll", handleFixedHeader);
    };
  }, []);
  return <div className="header p-5 bg-black text-white w-full"></div>;
};

export default Header;
