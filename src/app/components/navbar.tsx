"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const pages = [
    { id: 1, page: "Home", path: "#" },
    { id: 2, page: "Skills", path: "skills" },
    { id: 3, page: "Blogs", path: "blogs" },
  ];

  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav((prevNav) => !prevNav);
  };
  return (
    <>
      <div className="hidden md:block">
        <div className="flex items-center m-2 h-20 fixed justify-center w-screen">
          <ul className="flex flex-row justify-between p-2 border border-gray-700 backdrop-blur rounded-2xl sticky text-sm text-gray-300">
            {pages.map(({ id, page, path }) => (
              <li
                key={id}
                className="p-2 rounded-lg hover:text-gray-800 hover:bg-stone-300 transition-colors "
              >
                <Link href={path}>{page}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:hidden">
        <div
          className="absolute top-3 right-2 cursor-pointer z-20"
          aria-expanded={nav}
          onClick={toggleNav}
          role="button"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity backdrop-blur duration-300 flex flex-col justify-center items-center z-10">
            {pages.map(({ id, page, path }) => (
              <div key={id} className="p-3 text-center m-2 text-2xl w-full">
                <Link
                  href={path}
                  className="block w-full rounded-2xl hover:text-gray-800 hover:bg-stone-300"
                >
                  {page}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
