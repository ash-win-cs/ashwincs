import Link from "next/link";
import React from "react";

const NavBar = () => {
  const pages = [
    { id: 1, page: "Home" },
    { id: 2, page: "Skills" },
    { id: 3, page: "Blogs" },
  ];

  return (
    <>
    <div className="hidden md:block" >
      <div className="flex items-center m-2 h-20 fixed justify-center w-screen">
        <ul className="flex flex-row justify-between p-2 border border-gray-700 backdrop-blur rounded-2xl sticky text-sm text-gray-300">
          {pages.map(({ id, page }) => (
            <li key={id} className="p-2 rounded-lg hover:text-gray-800 hover:bg-stone-300 transition-colors">
              <Link href={page}>{page}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default NavBar;
