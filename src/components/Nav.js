import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
//để bên ngoài ko bị rerender component
const ListLink = [
  {
    id: 0,
    to: "/",
    title: "Home",
  },
  {
    id: 1,
    to: "/blog",
    title: "Blog",
  },
  {
    id: 2,
    to: "/profile",
    title: "Profile",
  },
  {
    id: 3,
    to: "/contact",
    title: "Contact Us",
  },
];
const Nav = () => {
  return (
    <>
      <div className="p-5 bg-white shadow-sm flex items-center justify-center gap-x-5">
        {ListLink.map((item) => (
          <NavLink
            key={item.id}
            to={item.to}
            className={({ isActive }) => (isActive ? "text-green-400" : "")}
          >
            {item.title}
          </NavLink>
        ))}
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Nav;
