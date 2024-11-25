import React from "react";
const Navbar = () => {
  return (
    <nav className="bg-[#1BA098] text-white w-full">
      <div
        className="mycontainer flex 
    justify-between items-center  h-14"
      >
        <div className="logo font-bold text-white text-2xl ">
          <span className="text-[#DEB992]">&lt;</span>
          <span>Pass</span>
          <span className="text-[#DEB992]">OP/&gt; </span>
        </div>
        <ul>
          <li className="flex gap-4">
            <a className="hover:font-bold" href="/">
              HOME
            </a>
            <a className="hover:font-bold" href="#">
              ABOUT US
            </a>
            <a className="hover:font-bold" href="#">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
