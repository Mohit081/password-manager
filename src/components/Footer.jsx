import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 text-white bg-[#1BA098] w-full justify-center items-center text-center p-1 ">
      <div className="logo font-bold text-white text-2xl">
        <span className="text-[#DEB992]">&lt;</span>
        <span>Pass</span>
        <span className="text-[#DEB992]">OP/&gt; </span>
      </div>
      <div className="flex justify-center items-center gap-1 text-center">
        <span>created with</span>
        <span>
          <img className="w-6" src="icons/heart.png" alt="heart" />
        </span>
        <span>by mohit</span>
      </div>
    </div>
  );
};

export default Footer;
