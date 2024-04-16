import React from "react";
import logo from "../../public/Logo.svg";
import telegram from "../../public/telegram.svg";
import message from "../../public/message.svg";
import tel from "../../public/tel.svg";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="w-full flex px-[150px] py-10 items-center justify-between">
      <div>
        <Image src={logo} alt="logo" className="w-[300px]" />
      </div>
      <ul className="flex items-center justify-between w-[420px]">
        <li>
          <Image src={telegram} alt="logo" className="w-[43px]" />
        </li>
        <li>
          <Image src={message} alt="logo" className="w-[43px]" />
        </li>
        <li className="flex items-center gap-3">
          <Image src={tel} alt="logo" className="w-[19px] " />
          <p className=" text-[#1E959B] font-bold">+7 800 301-79-27</p>
        </li>
      </ul>
      <button className=" w-[175px] h-[50px] rounded-lg bg-[#F05670] font-bold text-white text-[15px]">
        НАЧАТЬ ПРОЕКТ
      </button>
    </div>
  );
};

export default Navbar;
