import React from "react";

import people from "../../public/Group.svg";
import Image from "next/image";

const Section2 = () => {
  return (
    <div className="w-full bg-[#1E959B] pl-[230px] h-[400px] justify-between flex items-center">
      <div className="space-y-10">
        <h1 className="text-[20px] font-bold leading-6 text-[#F8FFFF]">
          Начнем проект?
        </h1>
        <p className="text-[17px] font-normal leading-6 text-[#DDF2F2]">
          Усилим Вашу комунду и запустим проект быстрее!
        </p>
        <button className="text-[13px] rounded-lg w-[260px] h-[60px] font-bold bg-white leading-6 text-[#1E959B]">
          УЗНАТЬ СТОИМОСТЬ ПРОЭКТА
        </button>
      </div>
      <div>
        <Image src={people} alt="logo" className="w-[750px]" />
      </div>
    </div>
  );
};

export default Section2;
